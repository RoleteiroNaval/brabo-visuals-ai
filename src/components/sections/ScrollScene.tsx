import { Play, Sparkles, Wand2, Film, Rocket } from 'lucide-react'
import { useGsap } from '../../hooks/useGsap'
import { gsap } from 'gsap'

const frames = [
  {
    icon: Wand2,
    tag: 'FRAME 01 · PROMPT',
    title: 'Você escreve.',
    desc: 'Um briefing em linguagem natural. Sem código, sem timeline, sem after effects.',
    bg: 'from-[#05070A] via-[#0A1410] to-[#05070A]',
    accent: '#39FF8B',
  },
  {
    icon: Sparkles,
    tag: 'FRAME 02 · GERAÇÃO',
    title: 'A IA orquestra.',
    desc: 'Skills cinematográficas montam keyframes, paleta, tipografia e curvas físicas.',
    bg: 'from-[#05070A] via-[#0A1218] to-[#05070A]',
    accent: '#00E5FF',
  },
  {
    icon: Film,
    tag: 'FRAME 03 · RENDER',
    title: 'O motor renderiza.',
    desc: 'Remotion processa local, em altíssima fluidez, sem fila e sem taxa de cloud.',
    bg: 'from-[#05070A] via-[#101006] to-[#05070A]',
    accent: '#FFD333',
  },
  {
    icon: Rocket,
    tag: 'FRAME 04 · ENTREGA',
    title: 'Você publica.',
    desc: 'MP4 4K pronto pra anúncio, com versões 16:9 e 9:16 saindo do mesmo código.',
    bg: 'from-[#05070A] via-[#100612] to-[#05070A]',
    accent: '#FF6BFF',
  },
]

export default function ScrollScene() {
  const ref = useGsap<HTMLDivElement>((self) => {
    const items = self.querySelectorAll<HTMLElement>('.scene-frame')
    const progressBar = self.querySelector<HTMLElement>('.scene-progress-fill')
    const counter = self.querySelector<HTMLElement>('.scene-counter')

    if (!items.length) return

    gsap.set(items, { opacity: 0, scale: 0.96, yPercent: 6 })
    gsap.set(items[0], { opacity: 1, scale: 1, yPercent: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: self.querySelector('.scroll-scene-wrap'),
        start: 'top top',
        end: () => `+=${window.innerHeight * (items.length - 1) * 1.1}`,
        pin: self.querySelector('.scroll-scene-pin'),
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (st) => {
          if (progressBar) progressBar.style.height = `${st.progress * 100}%`
          const idx = Math.min(items.length - 1, Math.floor(st.progress * items.length))
          if (counter) counter.textContent = String(idx + 1).padStart(2, '0')
        },
      },
    })

    for (let i = 0; i < items.length - 1; i++) {
      tl.to(items[i], { opacity: 0, scale: 1.04, yPercent: -6, duration: 1, ease: 'power2.inOut' }, i)
      tl.fromTo(
        items[i + 1],
        { opacity: 0, scale: 0.94, yPercent: 8 },
        { opacity: 1, scale: 1, yPercent: 0, duration: 1, ease: 'power2.inOut' },
        i
      )
    }
  }, [])

  return (
    <div ref={ref}>
      <section className="scroll-scene-wrap relative">
        <div className="scroll-scene-pin relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-grid-fade opacity-50" />

          {/* HUD lateral esquerda */}
          <div className="absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 md:block">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">
              Sequência
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="scene-counter font-display text-3xl font-bold text-neon-green">01</span>
              <span className="text-text-dim">/ {String(frames.length).padStart(2, '0')}</span>
            </div>
            <div className="relative mt-4 h-44 w-1 overflow-hidden rounded-full bg-bg-line">
              <div
                className="scene-progress-fill absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-neon-green to-neon-ciano"
                style={{ height: '0%' }}
              />
            </div>
          </div>

          {/* HUD topo direito */}
          <div className="absolute right-5 top-6 z-20 hidden items-center gap-2 md:flex">
            <span className="glow-dot animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">
              Renderizando ao vivo
            </span>
          </div>

          {/* Stack de frames */}
          <div className="relative z-10 flex h-full items-center justify-center px-5">
            <div className="relative h-[min(72vh,640px)] w-full max-w-5xl">
              {frames.map((f, i) => {
                const Icon = f.icon
                return (
                  <div
                    key={i}
                    className={`scene-frame absolute inset-0 grid place-items-center rounded-3xl border border-bg-line bg-gradient-to-br ${f.bg} shadow-2xl`}
                  >
                    <div className="grid h-full w-full grid-cols-1 gap-8 p-8 md:grid-cols-2 md:p-12">
                      <div className="flex flex-col justify-center">
                        <span
                          className="inline-flex w-fit items-center gap-2 rounded-full border border-bg-line bg-bg-card/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur"
                          style={{ color: f.accent }}
                        >
                          <Icon size={11} /> {f.tag}
                        </span>
                        <h3 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                          {f.title}
                        </h3>
                        <p className="mt-4 max-w-md text-text-muted">{f.desc}</p>
                      </div>

                      <div className="relative grid place-items-center">
                        <div
                          className="absolute inset-8 rounded-3xl opacity-30 blur-3xl"
                          style={{ background: f.accent }}
                        />
                        <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-2xl border border-bg-line bg-bg-card/80 shadow-2xl backdrop-blur">
                          <div className="absolute inset-0 grid place-items-center">
                            <div className="relative">
                              <div
                                className="absolute -inset-6 rounded-full opacity-30 blur-xl"
                                style={{ background: f.accent }}
                              />
                              <div
                                className="relative grid h-16 w-16 place-items-center rounded-full border bg-bg-card/80 backdrop-blur"
                                style={{ borderColor: `${f.accent}60` }}
                              >
                                <Play size={22} style={{ color: f.accent }} fill="currentColor" />
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-md bg-black/40 px-2 py-1.5 backdrop-blur">
                            <span className="font-mono text-[10px]" style={{ color: f.accent }}>
                              {f.tag.split('·')[0].trim()}
                            </span>
                            <div className="ml-auto h-1 w-20 overflow-hidden rounded-full bg-white/15">
                              <div className="h-full w-1/2" style={{ background: f.accent }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Hint de scroll */}
          <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-dim">
                Continue rolando
              </span>
              <div className="h-8 w-px bg-gradient-to-b from-neon-green to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
