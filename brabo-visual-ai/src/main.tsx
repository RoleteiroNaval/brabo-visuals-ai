import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

/**
 * HashRouter quando estamos em sandbox (iframe sem rede / file://),
 * BrowserRouter em produção normal.
 *
 * Detecção: file://, about:srcdoc, ou qualquer protocolo que não seja http/https.
 */
const isSandbox =
  typeof window === 'undefined'
    ? false
    : window.location.protocol === 'file:' ||
      window.location.protocol === 'about:' ||
      window.location.hostname === '' ||
      // iframes sandbox normalmente lançam ao tentar history.pushState
      (() => {
        try {
          window.history.replaceState(window.history.state, '', window.location.href)
          return false
        } catch {
          return true
        }
      })()

const Router = isSandbox ? HashRouter : BrowserRouter

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
