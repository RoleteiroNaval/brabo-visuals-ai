import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { packs } from '../data/videos'
import MagneticButton from '../components/effects/MagneticButton'

export default function Packs() {
  return (
    <section className="relative pt-16 pb-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="label-tag"><Sparkles size={11} className="text-neon-green" /> PACKS DE VÍDEOS</span>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight md:text-6xl">
            Vídeos prontos para <span className="gradient-text">vender mais.</span>
          </h1>
          <p className="mt-4 text-text-muted">
            Escolha o pack ideal para seu volume. Entrega rápida, direitos comerciais
            inclusos, sem mensalidade.
          </p>
        </motion.div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {packs.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`card-glass relative flex flex-col p-7 ${
                p.highlight ? 'border-neon-green/60 shadow-neon-soft' : ''
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-neon-green px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-bg">
                  {p.tag}
                </span>
              )}
              {!p.highlight && (
                <span className="inline-block w-fit rounded-full border border-bg-line bg-bg-soft px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                  {p.tag}
                </span>
              )}

              <h3 className="mt-5 font-display text-3xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-text-muted">{p.desc}</p>

              <div className="mt-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-text">{p.price}</span>
                  <span className="text-2xl text-text-muted">{p.cents}</span>
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
                  ou {p.installments}
                </div>
              </div>

              <ul className="mt-7 flex-1 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-neon-green/15 text-neon-green">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className="text-text-muted">{f}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                className={`mt-8 w-full rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  p.highlight
                    ? 'bg-neon-green text-bg hover:shadow-neon'
                    : 'border border-bg-line bg-bg-soft text-text hover:border-neon-green/40 hover:text-neon-green'
                }`}
              >
                Quero esse pack
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
