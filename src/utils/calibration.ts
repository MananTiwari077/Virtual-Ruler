export interface DeviceProfile {
  id: string;
  name: string;
  category: 'macbook' | 'iphone' | 'ipad' | 'android' | 'laptop' | 'monitor';
  physicalPpi: number;
  width?: number; // CSS or physical
  height?: number;
  dpr?: number;
  diagonal?: number;
}

export const DEVICE_CATEGORIES = [
  { id: 'all', label: 'All Devices' },
  { id: 'iphone', label: 'iPhone' },
  { id: 'ipad', label: 'iPad' },
  { id: 'macbook', label: 'MacBook' },
  { id: 'android', label: 'Android' },
  { id: 'laptop', label: 'Laptops' },
  { id: 'monitor', label: 'Monitors' }
] as const;

export const KNOWN_DEVICES: DeviceProfile[] = [
  // iPhones
  { id: 'iphone-16-pro-max', name: 'iPhone 16 Pro Max / 15 Pro Max', category: 'iphone', physicalPpi: 460, width: 430, height: 932, dpr: 3, diagonal: 6.9 },
  { id: 'iphone-16-pro', name: 'iPhone 16 Pro / 15 Pro', category: 'iphone', physicalPpi: 460, width: 393, height: 852, dpr: 3, diagonal: 6.3 },
  { id: 'iphone-16-plus', name: 'iPhone 16 Plus / 15 Plus', category: 'iphone', physicalPpi: 460, width: 430, height: 932, dpr: 3, diagonal: 6.7 },
  { id: 'iphone-16', name: 'iPhone 16 / 15 / 14', category: 'iphone', physicalPpi: 460, width: 393, height: 852, dpr: 3, diagonal: 6.1 },
  { id: 'iphone-14-pro-max', name: 'iPhone 14 Pro Max / 13 Pro Max', category: 'iphone', physicalPpi: 458, width: 428, height: 926, dpr: 3, diagonal: 6.7 },
  { id: 'iphone-14-pro', name: 'iPhone 14 Pro', category: 'iphone', physicalPpi: 460, width: 393, height: 852, dpr: 3, diagonal: 6.1 },
  { id: 'iphone-13-12', name: 'iPhone 13 / 13 Pro / 12 / 12 Pro', category: 'iphone', physicalPpi: 460, width: 390, height: 844, dpr: 3, diagonal: 6.1 },
  { id: 'iphone-13-mini', name: 'iPhone 13 Mini / 12 Mini', category: 'iphone', physicalPpi: 476, width: 375, height: 812, dpr: 3, diagonal: 5.4 },
  { id: 'iphone-11-xr', name: 'iPhone 11 / XR', category: 'iphone', physicalPpi: 326, width: 414, height: 896, dpr: 2, diagonal: 6.1 },
  { id: 'iphone-se', name: 'iPhone SE (2nd / 3rd gen)', category: 'iphone', physicalPpi: 326, width: 375, height: 667, dpr: 2, diagonal: 4.7 },

  // iPads
  { id: 'ipad-pro-13-m4', name: 'iPad Pro 13" (M4)', category: 'ipad', physicalPpi: 264, width: 1032, height: 1376, dpr: 2, diagonal: 13.0 },
  { id: 'ipad-pro-11-m4', name: 'iPad Pro 11" (M4 / M2 / M1)', category: 'ipad', physicalPpi: 264, width: 834, height: 1194, dpr: 2, diagonal: 11.0 },
  { id: 'ipad-air-13', name: 'iPad Air 13" (M2)', category: 'ipad', physicalPpi: 264, width: 1032, height: 1376, dpr: 2, diagonal: 12.9 },
  { id: 'ipad-air-11', name: 'iPad Air 11" / 10.9"', category: 'ipad', physicalPpi: 264, width: 820, height: 1180, dpr: 2, diagonal: 10.9 },
  { id: 'ipad-10th', name: 'iPad 10.9" (10th gen)', category: 'ipad', physicalPpi: 264, width: 820, height: 1180, dpr: 2, diagonal: 10.9 },
  { id: 'ipad-mini', name: 'iPad Mini (6th / 7th gen)', category: 'ipad', physicalPpi: 326, width: 744, height: 1133, dpr: 2, diagonal: 8.3 },

  // MacBooks
  { id: 'macbook-pro-16', name: 'MacBook Pro 16" (M1/M2/M3/M4)', category: 'macbook', physicalPpi: 254, width: 1728, height: 1117, dpr: 2, diagonal: 16.2 },
  { id: 'macbook-pro-14', name: 'MacBook Pro 14" (M1/M2/M3/M4)', category: 'macbook', physicalPpi: 254, width: 1512, height: 982, dpr: 2, diagonal: 14.2 },
  { id: 'macbook-air-15', name: 'MacBook Air 15" (M2/M3)', category: 'macbook', physicalPpi: 224, width: 1440, height: 932, dpr: 2, diagonal: 15.3 },
  { id: 'macbook-air-13-6', name: 'MacBook Air 13.6" (M2/M3)', category: 'macbook', physicalPpi: 224, width: 1470, height: 956, dpr: 2, diagonal: 13.6 },
  { id: 'macbook-air-13-3', name: 'MacBook Air 13.3" (M1 / Intel)', category: 'macbook', physicalPpi: 227, width: 1440, height: 900, dpr: 2, diagonal: 13.3 },
  { id: 'macbook-pro-13-3', name: 'MacBook Pro 13.3" (Retina)', category: 'macbook', physicalPpi: 227, width: 1440, height: 900, dpr: 2, diagonal: 13.3 },
  { id: 'imac-24', name: 'iMac 24" 4.5K', category: 'macbook', physicalPpi: 218, width: 2240, height: 1260, dpr: 2, diagonal: 23.5 },

  // Android
  { id: 'galaxy-s24-ultra', name: 'Samsung Galaxy S24 Ultra / S23 Ultra', category: 'android', physicalPpi: 505, width: 384, height: 824, dpr: 3.75, diagonal: 6.8 },
  { id: 'galaxy-s24-plus', name: 'Samsung Galaxy S24+ / S23+', category: 'android', physicalPpi: 513, width: 384, height: 824, dpr: 3.75, diagonal: 6.7 },
  { id: 'galaxy-s24', name: 'Samsung Galaxy S24 / S23', category: 'android', physicalPpi: 416, width: 360, height: 780, dpr: 3, diagonal: 6.2 },
  { id: 'pixel-9-pro-xl', name: 'Google Pixel 9 Pro XL / 8 Pro', category: 'android', physicalPpi: 489, width: 412, height: 923, dpr: 3.5, diagonal: 6.8 },
  { id: 'pixel-9-pro', name: 'Google Pixel 9 Pro', category: 'android', physicalPpi: 495, width: 412, height: 923, dpr: 3.5, diagonal: 6.3 },
  { id: 'pixel-9-8', name: 'Google Pixel 9 / 8 / 7', category: 'android', physicalPpi: 428, width: 412, height: 915, dpr: 2.625, diagonal: 6.2 },

  // Laptops
  { id: 'laptop-13-3-fhd', name: 'Dell XPS 13 / 13.3" 1080p Laptop', category: 'laptop', physicalPpi: 166, width: 1920, height: 1080, dpr: 1, diagonal: 13.3 },
  { id: 'laptop-14-0-fhd', name: 'Standard 14.0" 1080p Laptop', category: 'laptop', physicalPpi: 157, width: 1920, height: 1080, dpr: 1, diagonal: 14.0 },
  { id: 'laptop-14-0-2k', name: '14.0" 2.2K / 2.8K OLED Laptop', category: 'laptop', physicalPpi: 242, width: 2880, height: 1800, dpr: 2, diagonal: 14.0 },
  { id: 'laptop-15-6-fhd', name: 'Standard 15.6" 1080p Laptop', category: 'laptop', physicalPpi: 141, width: 1920, height: 1080, dpr: 1, diagonal: 15.6 },
  { id: 'laptop-15-6-4k', name: '15.6" 4K UHD Laptop', category: 'laptop', physicalPpi: 282, width: 3840, height: 2160, dpr: 2, diagonal: 15.6 },
  { id: 'laptop-16-0-qhd', name: '16.0" 16:10 QHD+ Laptop (2560x1600)', category: 'laptop', physicalPpi: 189, width: 2560, height: 1600, dpr: 1.5, diagonal: 16.0 },
  { id: 'laptop-17-3-fhd', name: 'Standard 17.3" 1080p Laptop', category: 'laptop', physicalPpi: 127, width: 1920, height: 1080, dpr: 1, diagonal: 17.3 },
  { id: 'surface-pro-9', name: 'Microsoft Surface Pro 9 / 8', category: 'laptop', physicalPpi: 267, width: 1440, height: 960, dpr: 2, diagonal: 13.0 },

  // Desktop Monitors
  { id: 'monitor-21-5-fhd', name: 'Standard 21.5" 1080p Monitor', category: 'monitor', physicalPpi: 102, width: 1920, height: 1080, dpr: 1, diagonal: 21.5 },
  { id: 'monitor-24-fhd', name: 'Standard 24" 1080p Monitor', category: 'monitor', physicalPpi: 92, width: 1920, height: 1080, dpr: 1, diagonal: 24.0 },
  { id: 'monitor-24-1440p', name: '24" 1440p QHD Monitor', category: 'monitor', physicalPpi: 123, width: 2560, height: 1440, dpr: 1, diagonal: 23.8 },
  { id: 'monitor-27-fhd', name: 'Standard 27" 1080p Monitor', category: 'monitor', physicalPpi: 82, width: 1920, height: 1080, dpr: 1, diagonal: 27.0 },
  { id: 'monitor-27-1440p', name: 'Standard 27" 1440p (QHD) Monitor', category: 'monitor', physicalPpi: 109, width: 2560, height: 1440, dpr: 1, diagonal: 27.0 },
  { id: 'monitor-27-4k', name: 'Standard 27" 4K UHD Monitor', category: 'monitor', physicalPpi: 163, width: 3840, height: 2160, dpr: 1.5, diagonal: 27.0 },
  { id: 'studio-display-27', name: 'Apple Studio Display 27" 5K', category: 'monitor', physicalPpi: 218, width: 2560, height: 1440, dpr: 2, diagonal: 27.0 },
  { id: 'monitor-32-1440p', name: '32" 1440p QHD Monitor', category: 'monitor', physicalPpi: 93, width: 2560, height: 1440, dpr: 1, diagonal: 31.5 },
  { id: 'monitor-32-4k', name: 'Standard 32" 4K UHD Monitor', category: 'monitor', physicalPpi: 138, width: 3840, height: 2160, dpr: 1.5, diagonal: 31.5 },
  { id: 'monitor-34-ultrawide', name: 'Standard 34" Ultrawide (3440x1440)', category: 'monitor', physicalPpi: 110, width: 3440, height: 1440, dpr: 1, diagonal: 34.0 },
  { id: 'monitor-49-super-ultra', name: '49" Super Ultrawide (5120x1440)', category: 'monitor', physicalPpi: 109, width: 5120, height: 1440, dpr: 1, diagonal: 49.0 }
];

export const CREDIT_CARD_WIDTH_MM = 85.60;
export const CREDIT_CARD_HEIGHT_MM = 53.98;
export const CREDIT_CARD_WIDTH_IN = 85.60 / 25.4; // ~3.37008 inches

/**
 * Calculates CSS PPI from screen diagonal input in inches
 */
export function calculateCssPpiFromDiagonal(diagonalInches: number, cssWidth?: number, cssHeight?: number): number {
  if (typeof window === 'undefined') return 96;
  const w = cssWidth ?? window.screen.width;
  const h = cssHeight ?? window.screen.height;
  const cssDiagonal = Math.sqrt(w * w + h * h);
  return cssDiagonal / diagonalInches;
}

/**
 * Auto-detects device from browser environment
 */
export function detectDevice(): {
  device: DeviceProfile | null;
  confidence: 'exact' | 'estimated' | 'fallback';
  cssPpi: number;
  physicalPpi: number;
  description: string;
} {
  if (typeof window === 'undefined') {
    return {
      device: null,
      confidence: 'fallback',
      cssPpi: 96,
      physicalPpi: 96,
      description: 'Default 96 PPI'
    };
  }

  const ua = navigator.userAgent;
  const w = Math.min(window.screen.width, window.screen.height);
  const h = Math.max(window.screen.width, window.screen.height);
  const dpr = window.devicePixelRatio || 1;

  // 1. Check iOS devices
  const isIOS = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (isIOS) {
    for (const dev of KNOWN_DEVICES) {
      if ((dev.category === 'iphone' || dev.category === 'ipad') && dev.width && dev.height) {
        const devMin = Math.min(dev.width, dev.height);
        const devMax = Math.max(dev.width, dev.height);
        if (Math.abs(w - devMin) <= 2 && Math.abs(h - devMax) <= 2 && Math.abs(dpr - (dev.dpr || 2)) < 0.2) {
          const cssPpi = dev.physicalPpi / dpr;
          return {
            device: dev,
            confidence: 'exact',
            cssPpi,
            physicalPpi: dev.physicalPpi,
            description: `${dev.name} (Factory ${dev.physicalPpi} PPI)`
          };
        }
      }
    }
  }

  // 2. Check MacBooks
  const isMac = /Macintosh|Mac OS X/.test(ua) && !isIOS;
  if (isMac && dpr >= 2) {
    for (const dev of KNOWN_DEVICES) {
      if (dev.category === 'macbook' && dev.width && dev.height) {
        if (Math.abs(w - dev.height) <= 30 && Math.abs(h - dev.width) <= 30) {
          const cssPpi = dev.physicalPpi / dpr;
          return {
            device: dev,
            confidence: 'exact',
            cssPpi,
            physicalPpi: dev.physicalPpi,
            description: `${dev.name} (Retina ${dev.physicalPpi} PPI)`
          };
        }
      }
    }
  }

  // 3. Check common desktop / laptop resolution heuristics
  const totalCssWidth = window.screen.width;
  const totalCssHeight = window.screen.height;

  // Android Phone heuristic
  if (/Android/.test(ua) && w < 600) {
    const estimatedPhysical = 420;
    const cssPpi = estimatedPhysical / dpr;
    return {
      device: null,
      confidence: 'estimated',
      cssPpi,
      physicalPpi: estimatedPhysical,
      description: `Android Phone (${Math.round(cssPpi)} CSS PPI @ ${dpr}x)`
    };
  }

  // Standard monitors
  if (totalCssWidth >= 1920 || (totalCssWidth * dpr >= 1920)) {
    if (dpr === 1) {
      if (totalCssWidth === 1920 && totalCssHeight === 1080) {
        return {
          device: KNOWN_DEVICES.find(d => d.id === 'monitor-24-fhd') || null,
          confidence: 'estimated',
          cssPpi: 92,
          physicalPpi: 92,
          description: '24" 1080p Display Estimate (92 PPI)'
        };
      } else if (totalCssWidth === 2560 && totalCssHeight === 1440) {
        return {
          device: KNOWN_DEVICES.find(d => d.id === 'monitor-27-1440p') || null,
          confidence: 'estimated',
          cssPpi: 109,
          physicalPpi: 109,
          description: '27" 1440p Display Estimate (109 PPI)'
        };
      }
    } else if (dpr === 1.25 || dpr === 1.5) {
      const cssPpi = calculateCssPpiFromDiagonal(15.6, totalCssWidth, totalCssHeight);
      return {
        device: KNOWN_DEVICES.find(d => d.id === 'laptop-15-6-fhd') || null,
        confidence: 'estimated',
        cssPpi,
        physicalPpi: Math.round(cssPpi * dpr),
        description: '15.6" Laptop Display Estimate'
      };
    }
  }

  // Fallback web standard 96 PPI
  return {
    device: null,
    confidence: 'fallback',
    cssPpi: 96,
    physicalPpi: Math.round(96 * dpr),
    description: 'Standard Screen Estimate (96 CSS PPI)'
  };
}

/**
 * Format inch value into fractional imperial notation (e.g. 3 5/16")
 */
export function formatFractionalInches(inches: number): { decimal: string; fraction: string; combined: string } {
  const whole = Math.floor(inches);
  const remainder = inches - whole;
  
  // Find closest 1/32nd
  const step32 = Math.round(remainder * 32);
  
  if (step32 === 0) {
    return {
      decimal: inches.toFixed(3),
      fraction: `${whole}"`,
      combined: `${whole}" (${inches.toFixed(2)}")`
    };
  }
  if (step32 === 32) {
    return {
      decimal: (whole + 1).toFixed(3),
      fraction: `${whole + 1}"`,
      combined: `${whole + 1}" (${(whole + 1).toFixed(2)}")`
    };
  }

  // Simplify fraction
  let num = step32;
  let den = 32;
  while (num % 2 === 0 && den % 2 === 0) {
    num /= 2;
    den /= 2;
  }

  const fractionStr = whole > 0 ? `${whole} ${num}/${den}"` : `${num}/${den}"`;
  return {
    decimal: inches.toFixed(3),
    fraction: fractionStr,
    combined: `${fractionStr} (${inches.toFixed(2)}")`
  };
}
