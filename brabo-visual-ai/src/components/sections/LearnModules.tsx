import { learningModules } from '../../data/modules'
import { useGsap } from '../../hooks/useGsap'
import { gsap } from 'gsap'

export default function LearnModules() {
  const ref = useGsap<HTMLDivElement>((self) => {
    self.querySelectorAll<HTMLElement>('.learn-card').forEach((card, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      const bar = card.querySelector<HTMLElement>('.learn-bar')
      if (bar) {
        gsap.fromTo(
          bar,
          { width: '12px' },
          {
            width: '96px',
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 70%',
              end: 'top 40%',
              scrub: 0.5,
            },
          }
        )
      }
    })
  }, [])

  return (
    <section ref={ref} className="relative py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            O Que Você Vai <span className="gradient-text">Aprender</span>
          </h2>
          <p className="mt-3 text-text-muted">
            O mapa exato para plugar arquitetura cinematográfica no seu negócio.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {learningModules.map((m) => (
            <div
              key={m.n}
              className="learn-card card-glass group relative p-6 transition-all hover:border-neon-green/40"
            >
              <span className="inline-block rounded-md border border-bg-line bg-bg/60 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
                {m.n}
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{m.desc}</p>
              <div className="learn-bar mt-6 h-1 rounded-full bg-neon-green" style={{ width: '12px' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
