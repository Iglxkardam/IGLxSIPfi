import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh for better DX
      fastRefresh: true,
      // Babel optimizations
      babel: {
        plugins: [
          // Add any babel plugins here if needed
        ],
      },
    }),
  ],
  build: {
    // Target modern browsers for smaller bundle
    target: 'esnext',
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'three-vendor': ['three'],
          'web3-vendor': ['ethers', 'viem', 'wagmi'],
          'query-vendor': ['@tanstack/react-query'],
        },
        // Optimize asset naming
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
      }
    },
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'], // Remove specific console methods
      },
      mangle: true,
      format: {
        comments: false, // Remove comments
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Source maps for production debugging (disable for smaller build)
    sourcemap: false,
    // Report compressed size
    reportCompressedSize: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'react/jsx-runtime',
    ],
    exclude: ['@abstract-foundation/agw-client'],
    // Force optimization even in dev
    force: true,
  },
  // Performance improvements
  server: {
    hmr: {
      overlay: false
    },
    // Enable compression
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  // Preview server configuration
  preview: {
    port: 4173,
    strictPort: true,
  },
  // Define environment variables
  define: {
    // Replace process.env checks with literals for better tree-shaking
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
})
