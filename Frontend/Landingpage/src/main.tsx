import ReactDOM from 'react-dom/client'
import { AbstractWalletProvider } from '@abstract-foundation/agw-react'
import { abstractTestnet } from 'viem/chains'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AbstractWalletProvider chain={abstractTestnet}>
    <App />
  </AbstractWalletProvider>,
)
