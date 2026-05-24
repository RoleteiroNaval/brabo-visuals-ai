import { Play } from 'lucide-react'
import { useGsap } from '../../hooks/useGsap'
import { gsap } from 'gsap'
import { portfolio } from '../../data/videos'

export default function HorizontalShowcase() {
  const ref = useGsap<HTMLDivElement>((self) => {
    const track = self.querySelector<HTMLElement>('.h-track')
    const progress = self.querySelector<HTMLElement>('.h-track-progress')
    if (!track) return

    const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 80)

    gsap.to(track, {
      x: () => -getDistance(),
      ease: 'none',
      scrollTrigger: {
        trigger: self.querySelector('.h-wrap'),
        start: 'top top',
        end: () => `+=${getDistance()}`,
        pin: self.querySelector('.h-pin'),
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (st) => {
          if (progress) progress.style.width = `${st.progress * 100}%`
        },
      },
    })
  }, [])

  return (
    <div ref={ref}>
      <section className="h-wrap relative">
        <div className="h-pin relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-grid-fade opacity-30" />

          {/* Cabeçalho fixo */}
          <div className="container-x absolute left-0 right-0 top-0 z-20 pt-12">
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="label-tag"><span className="glow-dot" /> Showreel pinado</span>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
                  Role pra baixo, <br />
                  a galeria <span className="gradient-text">desliza.</span>
                </h2>
              </div>
              <div className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted md:block">
                Rolagem horizontal sincronizada
              </div>
            </div>
          </div>

          {/* Track horizontal */}
          <div className="absolute inset-0 flex items-center pt-32">
            <div className="h-track flex gap-6 pl-[8vw] will-change-transform">
              {portfolio.map((v, i) => (
                <article
                  key={v.id}
                  className="card-glass group relative w-[78vw] shrink-0 overflow-hidden sm:w-[58vw] md:w-[48vw] lg:w-[40vw]"
                >
                  <div
                    className="relative aspect-[16/10] overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${v.color}, #0A0E14)` }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 30% 30%, rgba(57,255,139,0.18), transparent 50%), radial-gradient(circle at 70% 70%, rgba(0,229,255,0.15), transparent 50%)',
                      }}
                    />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="relative">
                        <div className="absolute -inset-6 rounded-full bg-neon-green/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="relative grid h-16 w-16 place-items-center rounded-full border border-neon-green/40 bg-bg-card/70 backdrop-blur transition-transform duration-500 group-hover:scale-110">
                          <Play size={22} className="text-neon-green" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <span className="absolute left-4 top-4 rounded-md border border-bg-line bg-bg/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neon-green backdrop-blur">
                      {v.category}
                    </span>
                    <span className="absolute right-4 top-4 rounded-md bg-bg/70 px-2 py-1 font-mono text-[10px] text-text-muted backdrop-blur">
                      #{String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold">{v.title}</h3>
                    <p className="mt-1.5 text-sm text-text-muted">{v.desc}</p>
                  </div>
                </article>
              ))}
              <div className="w-[8vw] shrink-0" />
            </div>
          </div>

          {/* Progress bar inferior */}
          <div className="absolute bottom-8 left-1/2 z-20 w-[70%] max-w-md -translate-x-1/2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">Scroll</span>
              <div className="h-px flex-1 overflow-hidden bg-bg-line">
                <div className="h-track-progress h-px bg-gradient-to-r from-neon-green to-neon-ciano" style={{ width: '0%' }} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">→</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
