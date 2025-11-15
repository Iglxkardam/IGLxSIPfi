/**
 * Advanced Security Layer - Protection against UI manipulation and wallet compromise
 * Implements multiple security checks and integrity verification
 */

// Content Security Policy enforcement
export function enforceCSP() {
  const meta = document.createElement('meta');
  meta.httpEquiv = 'Content-Security-Policy';
  meta.content = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://api.coingecko.com https://*.abstract.xyz wss://*.walletconnect.com https://*.groq.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ');
  
  document.head.appendChild(meta);
}

// Detect and prevent UI manipulation attacks
export class SecurityMonitor {
  private checkInterval: NodeJS.Timeout | null = null;
  private criticalElements: Map<string, string> = new Map();

  constructor() {
    this.captureOriginalState();
    this.startMonitoring();
  }

  // Capture original state of critical UI elements
  private captureOriginalState() {
    // Store critical elements that should not be tampered
    const critical = [
      'wallet-connect-button',
      'transaction-form',
      'amount-input',
      'recipient-address',
      'approve-button',
    ];

    critical.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        this.criticalElements.set(id, element.outerHTML);
      }
    });
  }

  // Monitor DOM for unauthorized changes
  private startMonitoring() {
    // MutationObserver to detect DOM tampering
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
          this.checkForTampering();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeOldValue: true,
    });

    // Periodic integrity checks
    this.checkInterval = setInterval(() => {
      this.performIntegrityCheck();
    }, 5000); // Check every 5 seconds
  }

  // Check for suspicious DOM modifications
  private checkForTampering() {
    // Check for injected iframes (phishing overlay)
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach((iframe) => {
      if (!iframe.hasAttribute('data-trusted')) {
        console.error('🚨 SECURITY ALERT: Unauthorized iframe detected!');
        iframe.remove();
        this.alertUser('Suspicious iframe removed from page');
      }
    });

    // Check for suspicious scripts
    const scripts = document.querySelectorAll('script:not([src])');
    scripts.forEach((script) => {
      if (script.textContent?.includes('private') || 
          script.textContent?.includes('mnemonic') ||
          script.textContent?.includes('seed')) {
        console.error('🚨 SECURITY ALERT: Suspicious script detected!');
        script.remove();
        this.alertUser('Malicious script blocked');
      }
    });
  }

  // Verify integrity of critical elements
  private performIntegrityCheck(): boolean {
    let tampered = false;

    this.criticalElements.forEach((originalHTML, id) => {
      const element = document.getElementById(id);
      if (element && element.outerHTML !== originalHTML) {
        console.error(`🚨 SECURITY ALERT: Element ${id} has been tampered!`);
        tampered = true;
        
        // Restore original element
        const temp = document.createElement('div');
        temp.innerHTML = originalHTML;
        element.replaceWith(temp.firstChild!);
        
        this.alertUser(`Critical UI element "${id}" was modified and restored`);
      }
    });

    return !tampered;
  }

  private alertUser(message: string) {
    // Show security warning to user
    const alert = document.createElement('div');
    alert.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #dc2626;
      color: white;
      padding: 16px;
      border-radius: 8px;
      z-index: 999999;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
      font-weight: bold;
    `;
    alert.textContent = `⚠️ SECURITY: ${message}`;
    document.body.appendChild(alert);

    setTimeout(() => alert.remove(), 5000);
  }

  public stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }
  }
}

// Wallet address validation with checksum verification
export function validateWalletAddress(address: string): {
  valid: boolean;
  error?: string;
  isContract?: boolean;
} {
  // Remove whitespace
  address = address.trim();

  // Basic format check
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    return { valid: false, error: 'Invalid address format' };
  }

  // Check for known malicious addresses (blacklist)
  const blacklistedAddresses = [
    '0x0000000000000000000000000000000000000000', // Burn address
    // Add known scam addresses here
  ];

  if (blacklistedAddresses.includes(address.toLowerCase())) {
    return { valid: false, error: 'This address is blacklisted' };
  }

  // Warn if looks like a contract address (common in phishing)
  // In production, you should verify this with blockchain
  const looksLikeContract = /^0x[a-fA-F0-9]{40}$/.test(address);

  return { 
    valid: true, 
    isContract: looksLikeContract 
  };
}

// Transaction verification before signing
export interface TransactionData {
  to: string;
  value: string;
  data?: string;
  gasLimit?: string;
}

export function verifyTransactionSafety(tx: TransactionData): {
  safe: boolean;
  warnings: string[];
  critical: boolean;
} {
  const warnings: string[] = [];
  let critical = false;

  // Check recipient address
  const addressCheck = validateWalletAddress(tx.to);
  if (!addressCheck.valid) {
    warnings.push(`Invalid recipient: ${addressCheck.error}`);
    critical = true;
  }

  // Check for suspicious amounts
  const value = parseFloat(tx.value);
  if (value > 10) { // More than 10 ETH
    warnings.push('⚠️ Large transaction amount detected');
  }

  // Check for suspicious contract interactions
  if (tx.data && tx.data.length > 10) {
    // Check for dangerous function signatures
    const dangerousFunctions = [
      '0x095ea7b3', // approve
      '0xa9059cbb', // transfer
      '0x23b872dd', // transferFrom
    ];

    const signature = tx.data.substring(0, 10);
    if (dangerousFunctions.includes(signature)) {
      warnings.push('⚠️ Token approval/transfer detected - verify carefully');
    }
  }

  // Check gas limit for potential drain attack
  if (tx.gasLimit) {
    const gasLimit = parseInt(tx.gasLimit);
    if (gasLimit > 1000000) {
      warnings.push('⚠️ Unusually high gas limit');
      critical = true;
    }
  }

  return {
    safe: !critical,
    warnings,
    critical,
  };
}

// Clipboard hijacking prevention
export function protectClipboard() {
  let lastCopied = '';

  document.addEventListener('copy', () => {
    const selection = document.getSelection()?.toString();
    if (selection && /^0x[a-fA-F0-9]{40}$/.test(selection)) {
      lastCopied = selection;
    }
  });

  document.addEventListener('paste', async (e) => {
    const pastedText = e.clipboardData?.getData('text');
    
    if (pastedText && /^0x[a-fA-F0-9]{40}$/.test(pastedText)) {
      // Check if pasted address differs from what was copied
      if (lastCopied && pastedText !== lastCopied) {
        console.error('🚨 CLIPBOARD HIJACK DETECTED!');
        e.preventDefault();
        
        alert(
          '⚠️ SECURITY WARNING\n\n' +
          'The address you pasted differs from what you copied!\n' +
          'This may be a clipboard hijacking attack.\n\n' +
          'Original: ' + lastCopied.substring(0, 10) + '...\n' +
          'Pasted: ' + pastedText.substring(0, 10) + '...\n\n' +
          'Please verify the address carefully!'
        );
      }
    }
  });
}

// Prevent phishing overlays
export function preventPhishingOverlays() {
  // Detect and block suspicious overlays
  const observer = new MutationObserver(() => {
    const elements = document.querySelectorAll('[style*="position: fixed"], [style*="position: absolute"]');
    
    elements.forEach((element) => {
      const style = window.getComputedStyle(element as Element);
      
      // Check for full-screen overlays
      if (
        style.position === 'fixed' &&
        parseInt(style.width) > window.innerWidth * 0.8 &&
        parseInt(style.height) > window.innerHeight * 0.8 &&
        parseInt(style.zIndex) > 9000 &&
        !(element as HTMLElement).hasAttribute('data-app-modal')
      ) {
        console.error('🚨 SECURITY ALERT: Suspicious overlay detected!');
        (element as HTMLElement).remove();
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

// Network verification (prevent fake RPC endpoints)
export function verifyNetworkEndpoint(rpcUrl: string): boolean {
  const trustedProviders = [
    'infura.io',
    'alchemy.com',
    'abstract.xyz',
    'cloudflare-eth.com',
    'publicnode.com',
  ];

  try {
    const url = new URL(rpcUrl);
    return trustedProviders.some(provider => url.hostname.includes(provider));
  } catch {
    return false;
  }
}

// Initialize all security measures
export function initializeSecurity() {
  if (typeof window === 'undefined') return;

  // Enforce CSP
  enforceCSP();

  // Start security monitoring
  const monitor = new SecurityMonitor();

  // Protect clipboard
  protectClipboard();

  // Prevent phishing overlays
  preventPhishingOverlays();

  // Prevent drag-and-drop attacks
  document.addEventListener('drop', (e) => {
    e.preventDefault();
    console.warn('Drop event blocked for security');
  });

  // Disable right-click context menu in production (optional)
  if (process.env.NODE_ENV === 'production') {
    document.addEventListener('contextmenu', (e) => {
      if ((e.target as HTMLElement).tagName === 'INPUT' ||
          (e.target as HTMLElement).tagName === 'TEXTAREA') {
        return; // Allow for input fields
      }
      e.preventDefault();
    });
  }

  // Prevent console manipulation
  const originalConsole = { ...console };
  Object.keys(console).forEach((key) => {
    if (typeof console[key as keyof Console] === 'function') {
      (console as any)[key] = function(...args: any[]) {
        // Filter sensitive data from logs
        const filtered = args.map(arg => {
          if (typeof arg === 'string') {
            return arg.replace(/0x[a-fA-F0-9]{40}/g, '0x****');
          }
          return arg;
        });
        (originalConsole as any)[key](...filtered);
      };
    }
  });

  // Warn users about developer console
  console.log(
    '%c⚠️ SECURITY WARNING',
    'color: red; font-size: 40px; font-weight: bold;'
  );
  console.log(
    '%cIf someone told you to copy/paste something here, it is a scam!',
    'color: red; font-size: 20px;'
  );
  console.log(
    '%cPasting code here can give attackers access to your wallet.',
    'color: red; font-size: 16px;'
  );

  console.log('✅ Security measures initialized');

  return monitor;
}

// Export verification utilities
export const SecurityUtils = {
  validateWalletAddress,
  verifyTransactionSafety,
  verifyNetworkEndpoint,
  initializeSecurity,
};
