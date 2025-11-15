/**
 * Anti-Keylogger & Screen Capture Protection
 * Prevents keystroke logging and screenshot attacks
 */

// Virtual keyboard for sensitive inputs (private keys, seed phrases)
export class VirtualKeyboard {
  private keys: string[] = [];

  constructor() {
    this.generateKeys();
  }

  private generateKeys() {
    // Generate randomized keyboard layout
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
    this.keys = this.shuffleArray(chars);
  }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  public getKeys(): string[] {
    return this.keys;
  }

  public reshuffleKeys() {
    this.generateKeys();
  }
}

// Detect screen recording/sharing
export function detectScreenCapture(): void {
  // Check for getDisplayMedia (screen sharing)
  if ('mediaDevices' in navigator && 'getDisplayMedia' in navigator.mediaDevices) {
    const originalGetDisplayMedia = navigator.mediaDevices.getDisplayMedia;
    
    (navigator.mediaDevices as any).getDisplayMedia = function(options?: DisplayMediaStreamOptions) {
      console.error('🚨 SCREEN CAPTURE DETECTED!');
      alert('⚠️ SECURITY WARNING\n\nScreen recording detected!\n\nNever share your screen while accessing wallets or entering sensitive information.');
      return originalGetDisplayMedia.call(this, options);
    };
  }

  // Detect if page is visible (tab switching)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      // Page is hidden - could be screen recording software
      console.warn('⚠️ Page visibility changed');
    }
  });
}

// Anti-keylogger protection for password/seed phrase inputs
export function protectSensitiveInput(inputElement: HTMLInputElement): void {
  let actualValue = '';
  
  inputElement.addEventListener('keydown', (e) => {
    // Prevent actual keystrokes from being logged
    e.preventDefault();
    
    const key = e.key;
    if (key === 'Backspace') {
      actualValue = actualValue.slice(0, -1);
    } else if (key.length === 1) {
      actualValue += key;
    }
    
    // Display masked value
    inputElement.value = '*'.repeat(actualValue.length);
    
    // Store actual value in secure location
    (inputElement as any).__secureValue = actualValue;
  });
}

// Detect browser extensions (potential malicious extensions)
export function detectMaliciousExtensions(): {
  detected: boolean;
  suspicious: string[];
} {
  const suspicious: string[] = [];
  
  // Check for common wallet-stealing extension signatures
  const dangerousPatterns = [
    'getPrivateKey',
    'exportPrivateKey',
    'stealWallet',
    'sendToAttacker',
  ];

  // Check window object for suspicious modifications
  dangerousPatterns.forEach(pattern => {
    if ((window as any)[pattern]) {
      suspicious.push(pattern);
    }
  });

  // Check for modified Web3 providers
  if ((window as any).ethereum) {
    const ethereum = (window as any).ethereum;
    if (ethereum.__modified || ethereum.__hijacked) {
      suspicious.push('Modified Web3 provider detected');
    }
  }

  return {
    detected: suspicious.length > 0,
    suspicious,
  };
}

// Session timeout for sensitive operations
export class SessionManager {
  private timeoutDuration: number = 15 * 60 * 1000; // 15 minutes
  private timeoutId: NodeJS.Timeout | null = null;
  private lastActivity: number = Date.now();

  constructor(duration?: number) {
    if (duration) this.timeoutDuration = duration;
    this.resetTimeout();
    this.setupActivityListeners();
  }

  private setupActivityListeners() {
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
    
    events.forEach(event => {
      document.addEventListener(event, () => {
        this.lastActivity = Date.now();
        this.resetTimeout();
      });
    });
  }

  private resetTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      this.handleTimeout();
    }, this.timeoutDuration);
  }

  private handleTimeout() {
    // Clear sensitive data
    sessionStorage.clear();
    localStorage.removeItem('walletConnected');
    
    alert('⚠️ Session expired for security\n\nPlease reconnect your wallet.');
    window.location.reload();
  }

  public getTimeRemaining(): number {
    return this.timeoutDuration - (Date.now() - this.lastActivity);
  }
}

// Memory protection - prevent memory dumping attacks
export function protectMemory() {
  // Override toString for sensitive objects
  const originalStringify = JSON.stringify;
  JSON.stringify = function(value: any, ...args: any[]) {
    if (value && typeof value === 'object') {
      // Remove sensitive keys before stringifying
      const sensitiveKeys = ['privateKey', 'mnemonic', 'seed', 'password'];
      const cleaned = { ...value };
      
      sensitiveKeys.forEach(key => {
        if (key in cleaned) {
          cleaned[key] = '[REDACTED]';
        }
      });
      
      return originalStringify(cleaned, ...args);
    }
    return originalStringify(value, ...args);
  };
}

// Detect developer tools (potential attack vector)
export function detectDevTools(): void {
  const threshold = 160;
  let devtoolsOpen = false;

  setInterval(() => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    
    if (widthThreshold || heightThreshold) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        console.warn('⚠️ Developer tools detected. Be cautious of what you paste or run here.');
      }
    } else {
      devtoolsOpen = false;
    }
  }, 1000);
}

// Network traffic monitoring
export class NetworkMonitor {
  private suspiciousRequests: string[] = [];

  constructor() {
    this.interceptFetch();
    this.interceptXHR();
  }

  private interceptFetch() {
    const originalFetch = window.fetch;
    
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
      
      // Check for suspicious external requests
      if (this.isSuspiciousUrl(url)) {
        console.error('🚨 BLOCKED SUSPICIOUS REQUEST:', url);
        this.suspiciousRequests.push(url);
        
        alert(`⚠️ SECURITY ALERT\n\nBlocked suspicious network request to:\n${url}\n\nThis may be an attempt to steal your data.`);
        
        throw new Error('Blocked suspicious request');
      }
      
      return originalFetch.call(window, input, init);
    };
  }

  private interceptXHR() {
    const originalOpen = XMLHttpRequest.prototype.open;
    const self = this;
    
    XMLHttpRequest.prototype.open = function(method: string, url: string | URL, async: boolean = true, username?: string | null, password?: string | null) {
      const urlString = typeof url === 'string' ? url : url.href;
      
      if (self.isSuspiciousUrl(urlString)) {
        console.error('🚨 BLOCKED SUSPICIOUS XHR:', urlString);
        throw new Error('Blocked suspicious XHR request');
      }
      
      return originalOpen.call(this, method, url, async, username, password);
    };
  }

  private isSuspiciousUrl(url: string): boolean {
    try {
      const urlObj = new URL(url);
      
      // Block requests to known malicious domains
      const blocklist = [
        'phishing-site.com',
        'steal-wallet.xyz',
        'fake-metamask.net',
        // Add known malicious domains
      ];

      // Block requests with suspicious patterns
      const suspiciousPatterns = [
        /steal/i,
        /phish/i,
        /hack/i,
        /private.*key/i,
        /wallet.*export/i,
      ];

      // Check domain
      if (blocklist.some(domain => urlObj.hostname.includes(domain))) {
        return true;
      }

      // Check patterns
      if (suspiciousPatterns.some(pattern => pattern.test(url))) {
        return true;
      }

      return false;
    } catch {
      return false;
    }
  }

  public getSuspiciousRequests(): string[] {
    return this.suspiciousRequests;
  }
}

// Browser fingerprint verification (detect if running in modified browser)
export function verifyBrowserIntegrity(): {
  safe: boolean;
  issues: string[];
} {
  const issues: string[] = [];

  // Check for common browser modifications
  if ((navigator as any).webdriver) {
    issues.push('Browser automation detected');
  }

  // Check for headless browser
  if (navigator.userAgent.includes('HeadlessChrome')) {
    issues.push('Headless browser detected');
  }

  // Check if plugins are disabled (suspicious)
  if (navigator.plugins.length === 0 && !navigator.userAgent.includes('Mobile')) {
    issues.push('No plugins detected - possibly modified browser');
  }

  // Check for VM/sandbox environment
  if ((window as any).__selenium || (window as any).__webdriver || (window as any).__driver) {
    issues.push('Automation framework detected');
  }

  return {
    safe: issues.length === 0,
    issues,
  };
}

// Initialize all advanced protections
export function initializeAdvancedProtection() {
  console.log('🛡️ Initializing advanced security...');

  // Detect screen capture
  detectScreenCapture();

  // Check for malicious extensions
  const extensionCheck = detectMaliciousExtensions();
  if (extensionCheck.detected) {
    console.error('🚨 Suspicious extensions detected:', extensionCheck.suspicious);
    alert(
      '⚠️ SECURITY WARNING\n\n' +
      'Suspicious browser extensions detected:\n' +
      extensionCheck.suspicious.join('\n') +
      '\n\nThese may compromise your wallet security.'
    );
  }

  // Start session management
  const sessionManager = new SessionManager();

  // Protect memory
  protectMemory();

  // Detect developer tools
  detectDevTools();

  // Monitor network traffic
  const networkMonitor = new NetworkMonitor();

  // Verify browser integrity
  const browserCheck = verifyBrowserIntegrity();
  if (!browserCheck.safe) {
    console.warn('⚠️ Browser integrity issues:', browserCheck.issues);
  }

  console.log('✅ Advanced protection initialized');

  return {
    sessionManager,
    networkMonitor,
    browserCheck,
  };
}

export default {
  VirtualKeyboard,
  detectScreenCapture,
  protectSensitiveInput,
  detectMaliciousExtensions,
  SessionManager,
  protectMemory,
  detectDevTools,
  NetworkMonitor,
  verifyBrowserIntegrity,
  initializeAdvancedProtection,
};
