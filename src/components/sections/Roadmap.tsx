import { Settings, Cpu, Layers, PlayCircle } from 'lucide-react'
import { roadmap } from '../../data/modules'
import { useGsap } from '../../hooks/useGsap'
import { gsap } from 'gsap'

const iconMap = { Settings, Cpu, Layers, PlayCircle }

export default function Roadmap() {
  const ref = useGsap<HTMLDivElement>((self) => {
    const track = self.querySelector<HTMLElement>('.roadmap-track')
    if (!track) return

    // Linha vertical "desenha" enquanto scrolla
    gsap.fromTo(
      self.querySelector('.roadmap-line-fill'),
      { scaleY: 0, transformOrigin: 'top center' },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: track,
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: 0.6,
        },
      }
    )

    // Cada item entra alternando lados
    self.querySelectorAll<HTMLElement>('.roadmap-item').forEach((item, i) => {
      gsap.from(item, {
        x: i % 2 === 0 ? -40 : 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      const icon = item.querySelector<HTMLElement>('.roadmap-icon')
      if (icon) {
        gsap.to(icon, {
          backgroundColor: 'rgba(57,255,139,0.18)',
          borderColor: 'rgba(57,255,139,0.6)',
          boxShadow: '0 0 24px rgba(57,255,139,0.4)',
          scrollTrigger: {
            trigger: item,
            start: 'top 60%',
            end: 'top 40%',
            scrub: 0.4,
          },
        })
      }
    })
  }, [])

  return (
    <section ref={ref} className="relative py-24">
      <div className="absolute inset-0 bg-grid-fade opacity-50" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            O Roadmap <span className="gradient-text">Definitivo</span>
          </h2>
          <p className="mt-4 text-text-muted">
            A via expressa de 4 etapas para parar de sofrer no After Effects e
            dominar a criação de vídeo baseada em código.
          </p>
        </div>

        <div className="roadmap-track relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-7 top-6 bottom-6 w-px overflow-hidden">
            <div className="absolute inset-0 bg-bg-line" />
            <div className="roadmap-line-fill absolute inset-0 bg-gradient-to-b from-neon-green via-neon-ciano to-yellow-400" />
          </div>

          <div className="space-y-6">
            {roadmap.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap]
              return (
                <div key={step.n} className="roadmap-item relative flex items-start gap-5">
                  <div className="relative z-10 shrink-0">
                    <div className="absolute -inset-2 rounded-full bg-neon-green/10 blur-md" />
                    <div className="roadmap-icon relative grid h-14 w-14 place-items-center rounded-full border border-bg-line bg-bg-card text-neon-green transition-all">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="card-glass relative flex-1 overflow-hidden p-5 transition-all hover:border-neon-green/40">
                    <span className="absolute right-4 top-2 font-display text-6xl font-bold text-bg-line">
                      {step.n}
                    </span>
                    <h3 className="font-display text-lg font-bold">
                      <span className="text-neon-green">{i + 1}.</span> {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-text-muted">{step.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
