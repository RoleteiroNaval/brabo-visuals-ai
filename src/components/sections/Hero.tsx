import { motion } from 'framer-motion'
import { ArrowRight, Play, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import MagneticButton from '../effects/MagneticButton'
import ParticlesBackground from '../effects/ParticlesBackground'
import { useGsap } from '../../hooks/useGsap'

const logLines = [
  { txt: 'Interpretação do Prompt...', status: 'OK', color: 'text-neon-green' },
  { txt: 'Gerando Keyframes React...', status: 'OK', color: 'text-neon-ciano' },
  { txt: 'Renderizando Cena Cinematográfica...', status: 'Loop', color: 'text-yellow-400' },
  { txt: 'Sincronizando Sound Design...', status: 'OK', color: 'text-neon-green' },
  { txt: 'Exportando MP4 4K...', status: 'OK', color: 'text-neon-green' },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setVisibleLines((v) => (v >= logLines.length ? 0 : v + 1))
    }, 1100)
    return () => clearInterval(id)
  }, [])

  /**
   * Parallax em camadas com ScrollTrigger.
   * Como o useGsap escopa por seletor, as classes só pegam dentro do ref.
   */
  const ref = useGsap<HTMLDivElement>((self) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: self,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
      },
    })

    tl.to(self.querySelector('.hero-bg-layer'), { yPercent: 30, opacity: 0.4 }, 0)
    tl.to(self.querySelector('.hero-mid-layer'), { yPercent: -15, opacity: 0.6 }, 0)
    tl.to(self.querySelector('.hero-terminal'), { yPercent: -25, scale: 0.95, opacity: 0.6 }, 0)

    gsap.fromTo(
      self.querySelector('.hero-floating-cta'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: self,
          start: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section ref={ref} className="hero-wrap hero-glow relative overflow-hidden pt-12 pb-24">
      {/* Camada de fundo — partículas */}
      <div className="hero-bg-layer absolute inset-0 will-change-transform">
        <ParticlesBackground density={70} />
        <div className="absolute inset-0 bg-grid-fade" />
      </div>

      <div className="container-x relative z-10">
        {/* Camada do meio — título + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-mid-layer mx-auto flex max-w-4xl flex-col items-center text-center will-change-transform"
        >
          <span className="label-tag">
            <span className="glow-dot animate-pulse" /> INSCRIÇÕES ABERTAS
          </span>

          <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
            Aprenda a criar <br className="hidden sm:block" />
            <span>comerciais com IA</span> <br className="hidden sm:block" />
            em menos de <span className="gradient-text">30 minutos.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            O que antes levava <span className="text-text">8 horas suando no After Effects</span> e
            custava fortunas, agora você executa no seu computador dando simples comandos à
            <span className="text-neon-green"> Inteligência Artificial</span>.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <MagneticButton className="btn-primary">
              <Play size={16} /> Quero criar meus comerciais
              <ArrowRight size={16} />
            </MagneticButton>
            <Link to="/portfolio" className="btn-ghost">
              Ver trabalhos
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4 text-xs text-text-dim">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-6 w-6 rounded-full border-2 border-bg bg-gradient-to-br from-neon-green to-neon-ciano"
                />
              ))}
            </div>
            <span className="font-mono uppercase tracking-[0.18em]">+ 1.200 alunos brabos</span>
          </div>
        </motion.div>

        {/* Camada da frente — terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-terminal card-glass mx-auto mt-20 max-w-5xl overflow-hidden shadow-neon-soft will-change-transform"
        >
          <div className="flex items-center gap-2 border-b border-bg-line bg-bg-soft/80 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
            <div className="ml-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
              <Terminal size={12} className="text-neon-green" />
              brabo_visual_engine
              <span className="text-text-dim">›</span>
              render_node
            </div>
          </div>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            <div className="relative aspect-video border-b border-bg-line md:border-b-0 md:border-r">
              <div className="absolute inset-0 bg-gradient-to-br from-bg-card via-bg to-bg-soft" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 animate-pulse-slow rounded-full bg-neon-green/10 blur-2xl" />
                  <div className="relative grid h-16 w-16 place-items-center rounded-full border border-neon-green/40 bg-bg-card/80 backdrop-blur">
                    <Play className="text-neon-green" size={22} fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 h-1 overflow-hidden rounded-full bg-bg-line">
                <motion.div
                  className="h-full bg-neon-green"
                  animate={{ width: ['0%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
              </div>
              <div className="scanline" />
            </div>

            <div className="flex flex-col">
              <div className="border-b border-bg-line p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon-ciano">
                  Prompt de Criação
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-text">
                  "Crie um vídeo de animação de login da minha área de membros.
                  Fundo clean dark, usuário digitando os dados, e a transição
                  direta para uma vitrine de aulas estilo Netflix."
                </p>
              </div>
              <div className="flex-1 bg-bg-soft/50 p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
                  Log de Execução
                </div>
                <div className="mt-3 space-y-2">
                  {logLines.slice(0, visibleLines).map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`terminal-line ${line.color}`}
                    >
                      <span className="text-text-dim">› </span>
                      {line.txt} <span className="opacity-70">[{line.status}]</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-bg-line">
                  <motion.div
                    className="h-full bg-yellow-400"
                    animate={{ width: ['0%', '100%'] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA flutuante */}
        <div className="hero-floating-cta mx-auto mt-10 flex max-w-md opacity-0">
          <Link
            to="/contato"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-neon-green/30 bg-gradient-to-r from-bg-card via-bg-soft to-bg-card px-6 py-4 backdrop-blur-xl transition-all hover:border-neon-green/60"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-neon-green/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="text-sm text-text-muted">Quero o</span>
            <span className="font-semibold text-text">melhor comercial</span>
            <span className="text-sm font-semibold text-neon-green">com IA</span>
            <ArrowRight size={14} className="text-neon-green transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
