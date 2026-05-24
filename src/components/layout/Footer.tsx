import { Link } from 'react-router-dom'
import { Instagram, Youtube, MessageCircle, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-bg-line bg-bg-soft/60">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-neon-green to-neon-deep flex items-center justify-center font-display font-bold text-bg">B</div>
            <div className="font-display text-sm font-bold tracking-tight">BRABO VISUAL AI</div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-text-muted">
            Estúdio de comerciais cinematográficos com Inteligência Artificial.
            Vídeos de alto padrão sem agências caras, sem prazos absurdos.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram, Youtube, MessageCircle, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-lg border border-bg-line bg-bg-card text-text-muted transition-all hover:border-neon-green/40 hover:text-neon-green"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-neon-green">Navegação</div>
          <ul className="mt-4 space-y-2.5 text-sm text-text-muted">
            <li><Link to="/" className="hover:text-text">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-text">Portfólio</Link></li>
            <li><Link to="/packs" className="hover:text-text">Packs</Link></li>
            <li><Link to="/imersao" className="hover:text-text">Imersão</Link></li>
            <li><Link to="/contato" className="hover:text-text">Contato</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-neon-green">Contato</div>
          <ul className="mt-4 space-y-2.5 text-sm text-text-muted">
            <li>contato@bravovisual.ai</li>
            <li>WhatsApp comercial</li>
            <li>Atendimento 24/7 via IA</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bg-line">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-text-dim md:flex-row">
          <span>© {new Date().getFullYear()} Brabo Visual AI Studio. Todos os direitos reservados.</span>
          <span className="font-mono">Powered by React · Vite · Framer Motion · Lenis</span>
        </div>
      </div>
    </footer>
  )
}
