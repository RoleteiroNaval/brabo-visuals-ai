import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, Component, type ReactNode } from 'react'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import TopBar from './components/layout/TopBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CursorGlow from './components/effects/CursorGlow'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Packs from './pages/Packs'
import Imersao from './pages/Imersao'
import Contato from './pages/Contato'

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null }
  static getDerivedStateFromError(error: Error) { return { error } }
  componentDidCatch(error: Error, info: unknown) {
    console.error('App crashed:', error, info)
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24, fontFamily: 'monospace', color: '#ff6b6b', background: '#05070A', minHeight: '100vh' }}>
          <h1 style={{ color: '#39FF8B' }}>⚠ Erro de runtime</h1>
          <pre style={{ whiteSpace: 'pre-wrap', marginTop: 12 }}>
            {String(this.state.error?.message || this.state.error)}
            {'\n\n'}
            {String((this.state.error as Error)?.stack || '')}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

export default function App() {
  useSmoothScroll()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-bg text-text">
        <CursorGlow />
        <TopBar />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/packs" element={<Packs />} />
            <Route path="/imersao" element={<Imersao />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
