/**
 * Sanitize HTML content to prevent XSS attacks
 * Simple implementation without external dependencies
 */
export function sanitizeHTML(dirty: string): string {
  const element = document.createElement('div');
  element.textContent = dirty;
  return element.innerHTML;
}

/**
 * Sanitize HTML while preserving some formatting
 */
export function sanitizeHTMLWithFormatting(dirty: string): string {
  const allowedTags = ['b', 'i', 'em', 'strong', 'p', 'br', 'code', 'pre'];
  const element = document.createElement('div');
  element.innerHTML = dirty;
  
  // Remove script tags and event handlers
  const scripts = element.querySelectorAll('script');
  scripts.forEach((script) => script.remove());
  
  // Remove all elements except allowed tags
  const allElements = element.querySelectorAll('*');
  allElements.forEach((el) => {
    if (!allowedTags.includes(el.tagName.toLowerCase())) {
      el.replaceWith(...Array.from(el.childNodes));
    }
    
    // Remove all event handlers
    Array.from(el.attributes).forEach((attr) => {
      if (attr.name.startsWith('on')) {
        el.removeAttribute(attr.name);
      }
    });
  });
  
  return element.innerHTML;
}

/**
 * Sanitize user input for safe display
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
}

/**
 * Validate and sanitize wallet address
 */
export function sanitizeAddress(address: string): string {
  // Ethereum address validation (0x + 40 hex characters)
  const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
  
  if (!ethAddressRegex.test(address)) {
    throw new Error('Invalid wallet address format');
  }
  
  return address.toLowerCase();
}

/**
 * Sanitize numeric input
 */
export function sanitizeNumber(input: string): string {
  // Only allow numbers and one decimal point
  return input.replace(/[^\d.]/g, '').replace(/(\..*)\./g, '$1');
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize URL
 */
export function sanitizeURL(url: string): string {
  try {
    const urlObj = new URL(url);
    
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      throw new Error('Invalid URL protocol');
    }
    
    return urlObj.href;
  } catch (error) {
    throw new Error('Invalid URL format');
  }
}

/**
 * Rate limiting helper
 */
export class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private maxRequests: number;
  private timeWindow: number;

  constructor(maxRequests: number = 10, timeWindowMs: number = 60000) {
    this.maxRequests = maxRequests;
    this.timeWindow = timeWindowMs;
  }

  canMakeRequest(key: string): boolean {
    const now = Date.now();
    const timestamps = this.requests.get(key) || [];
    
    // Remove old timestamps outside the time window
    const validTimestamps = timestamps.filter(
      (timestamp) => now - timestamp < this.timeWindow
    );
    
    if (validTimestamps.length >= this.maxRequests) {
      return false;
    }
    
    validTimestamps.push(now);
    this.requests.set(key, validTimestamps);
    return true;
  }

  getRemainingTime(key: string): number {
    const timestamps = this.requests.get(key) || [];
    if (timestamps.length < this.maxRequests) return 0;
    
    const oldestTimestamp = Math.min(...timestamps);
    return Math.max(0, this.timeWindow - (Date.now() - oldestTimestamp));
  }
}

/**
 * Prevent SQL injection in search queries
 */
export function sanitizeSearchQuery(query: string): string {
  return query
    .replace(/['"`;]/g, '') // Remove SQL special characters
    .replace(/--/g, '')
    .replace(/\/\*/g, '')
    .replace(/\*\//g, '')
    .trim()
    .slice(0, 100); // Limit length
}

/**
 * Validate transaction amount
 */
export function validateAmount(amount: string): { valid: boolean; error?: string } {
  const numAmount = parseFloat(amount);
  
  if (isNaN(numAmount)) {
    return { valid: false, error: 'Invalid amount format' };
  }
  
  if (numAmount <= 0) {
    return { valid: false, error: 'Amount must be greater than 0' };
  }
  
  if (numAmount > 1000000000) {
    return { valid: false, error: 'Amount too large' };
  }
  
  // Check for reasonable decimal places
  const decimalPlaces = (amount.split('.')[1] || '').length;
  if (decimalPlaces > 18) {
    return { valid: false, error: 'Too many decimal places' };
  }
  
  return { valid: true };
}
