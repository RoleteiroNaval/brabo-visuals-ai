import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import MagneticButton from '../effects/MagneticButton'

const benefits = [
  '1 Ano de Acesso ao Curso',
  'Skill Personalizada Brabo',
  'Acesso à Comunidade Fechada',
  'Acesso Imediato',
  'Garantia de Atualizações Futuras',
  '7 dias de Garantia Incondicional',
]

export default function Pricing() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-x-0 top-1/2 -z-0 h-[500px] -translate-y-1/2 bg-radial-glow" />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-glass relative mx-auto max-w-xl overflow-hidden p-8 md:p-10"
        >
          {/* glow border animado */}
          <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-neon-green/30 via-transparent to-neon-ciano/30 opacity-60" />
          <div className="relative">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Garanta Seu Acesso com <br />
                <span className="gradient-text">Valor Promocional</span>
              </h2>
              <p className="mt-2 text-sm text-text-muted">
                Transforme suas ideias em comerciais incríveis.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-neon-green/20 bg-gradient-to-br from-neon-green/5 via-bg-card to-bg-card p-7 text-center">
              <div className="text-xs uppercase tracking-[0.2em] text-text-muted">12x de</div>
              <div className="mt-2 font-display text-6xl font-bold text-neon-green">R$ 20,37</div>
              <div className="mt-2 text-xs text-text-muted">ou <span className="text-text">R$ 197,00</span> à vista</div>
            </div>

            <ul className="mt-7 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-neon-green/15 text-neon-green">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <MagneticButton className="btn-primary w-full">
                Sim! Eu vou aprender Motion com IA.
              </MagneticButton>
              <div className="mt-3 text-center text-[11px] uppercase tracking-[0.18em] text-text-dim">
                Ambiente de Pagamento 100% Seguro.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
