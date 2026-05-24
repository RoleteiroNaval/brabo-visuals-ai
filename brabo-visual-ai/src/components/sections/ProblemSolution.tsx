import { motion } from 'framer-motion'
import { Briefcase, Film, Play } from 'lucide-react'

export default function ProblemSolution() {
  return (
    <section className="relative py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* Mockup vertical (telefone) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-neon-green/10 blur-3xl" />
            <div className="relative h-[520px] w-[260px] rounded-[40px] border border-bg-line bg-bg-soft p-3 shadow-neon-soft">
              <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-bg" />
              <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-gradient-to-b from-bg via-bg-card to-bg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-yellow-400/90 shadow-lg">
                    <Play className="text-bg" size={22} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-bg-line" />
                    <div className="h-1.5 flex-1 rounded-full bg-bg-line" />
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-bg-line">
                    <motion.div
                      className="h-full bg-neon-green"
                      animate={{ width: ['0%', '100%'] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Produza em escala. <br />
            <span className="text-text-muted">Sem pagar taxas absurdas.</span>
          </h2>
          <p className="mt-5 max-w-lg text-text-muted">
            Ter vídeos de <span className="text-text">alto padrão</span> não é mais privilégio de
            quem tem bolsos <span className="text-neon-green">infinitos</span>. Desenhamos essa
            inteligência para resolver duas dores exatas:
          </p>

          <div className="mt-8 space-y-4">
            <div className="card-glass p-5 transition-all hover:border-neon-green/40">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-neon-green/10 text-neon-green">
                  <Briefcase size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-lg font-bold">Para o Empresário</h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon-green">
                      Autonomia & Custo Zero
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-text-muted">
                    Vai lançar uma feature, produto ou software e precisa comunicar rápido?
                    Pare de depender de agências supercaras. Domine a IA para produzir em
                    minutos os comerciais que antes levavam semanas.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass p-5 transition-all hover:border-neon-ciano/40">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-neon-ciano/10 text-neon-ciano">
                  <Film size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-lg font-bold">Para o Editor de Vídeo</h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon-ciano">
                      Pensamento de Diretor
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-text-muted">
                    Não tem tempo de varar a madrugada aprendendo técnicas complexas?
                    Aprenda a pensar como Diretor Mecânico e entregue as ordens para a
                    máquina moldar o projeto brutal por você em escala.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
