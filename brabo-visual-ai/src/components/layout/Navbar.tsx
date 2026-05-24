import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/packs', label: 'Packs' },
  { to: '/imersao', label: 'Imersão' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-bg-line bg-bg/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-neon-green to-neon-deep flex items-center justify-center font-display font-bold text-bg shadow-neon-soft transition-transform group-hover:scale-105">
            B
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-neon-ciano shadow-[0_0_10px_#00E5FF]" />
          </div>
          <div className="leading-none">
            <div className="font-display text-sm font-bold tracking-tight">BRABO VISUAL</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neon-green">AI Studio</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive ? 'text-neon-green' : 'text-text-muted hover:text-text'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-neon-green shadow-[0_0_10px_#39FF8B]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/imersao"
          className="hidden rounded-full border border-neon-green/40 bg-neon-green/10 px-4 py-2 text-sm font-medium text-neon-green transition-all hover:bg-neon-green hover:text-bg sm:inline-flex"
        >
          Garantir Acesso
        </Link>
      </div>
    </header>
  )
}
