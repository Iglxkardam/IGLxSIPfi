import ReactDOM from 'react-dom/client'
import { AbstractWalletProvider } from '@abstract-foundation/agw-react'
import { abstractTestnet } from 'viem/chains'
import App from './App.tsx'
import './index.css'
import { registerServiceWorker } from './utils/serviceWorkerRegistration'

// Register service worker for PWA functionality
registerServiceWorker();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AbstractWalletProvider chain={abstractTestnet}>
    <App />
  </AbstractWalletProvider>,
)
