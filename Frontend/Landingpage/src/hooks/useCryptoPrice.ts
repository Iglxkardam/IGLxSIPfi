/**
 * Hook to fetch real-time cryptocurrency prices
 * Uses Binance public API (same data source as TradingView, no CORS issues)
 */

import { useState, useEffect } from 'react';

interface PriceData {
  eth: number;
  usdc: number;
  btc: number;
  pengu: number;
  loading: boolean;
  error: string | null;
}

// Cache for price data
let cachedPrices: PriceData | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 2000; // 2 seconds cache for real-time updates

export const useCryptoPrice = (): PriceData => {
  const [prices, setPrices] = useState<PriceData>({
    eth: 3000, // Fallback price
    usdc: 1,
    btc: 45000,
    pengu: 0.01,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchPrices = async () => {
      const now = Date.now();
      
      // Use cache if available and fresh
      if (cachedPrices && (now - lastFetchTime) < CACHE_DURATION) {
        setPrices(cachedPrices);
        return;
      }

      try {
        // Fetch BTC and ETH prices from Binance (same as TradingView source)
        const [btcResponse, ethResponse] = await Promise.all([
          fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'),
          fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT')
        ]);
        
        const btcData = await btcResponse.json();
        const ethData = await ethResponse.json();
        
        const newPrices = {
          eth: parseFloat(ethData.price) || 3000,
          usdc: 1,
          btc: parseFloat(btcData.price) || 45000,
          pengu: 0.01, // Not available on Binance, keep fallback
          loading: false,
          error: null,
        };
        
        // Update cache
        cachedPrices = newPrices;
        lastFetchTime = now;
        setPrices(newPrices);
      } catch (error) {
        console.error('Failed to fetch crypto prices from Binance:', error);
        const fallbackPrices = {
          eth: 3000,
          usdc: 1,
          btc: 45000,
          pengu: 0.01,
          loading: false,
          error: 'Using fallback prices',
        };
        setPrices(fallbackPrices);
        if (!cachedPrices) {
          cachedPrices = fallbackPrices;
        }
      }
    };

    fetchPrices();

    // Refresh prices every 2 seconds for real-time updates (matches TradingView)
    const interval = setInterval(fetchPrices, 2000);

    return () => clearInterval(interval);
  }, []);

  return prices;
};
