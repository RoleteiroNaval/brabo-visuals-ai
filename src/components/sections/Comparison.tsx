import { motion } from 'framer-motion'
import { Cpu, Zap, Clock } from 'lucide-react'

export default function Comparison() {
  return (
    <section className="relative py-24">
      <div className="container-x">
        <div className="card-glass mx-auto max-w-6xl overflow-hidden p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Ferramenta <span className="gradient-text">100% Gratuita.</span><br />
                Sua única moeda é a <span className="gradient-text">mensagem.</span>
              </h2>
              <p className="mt-5 max-w-md text-text-muted">
                O seu sistema é orquestrado em cima do que há de mais poderoso e
                acessível hoje no mercado open-source.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-neon-green/10 text-neon-green">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <div className="font-semibold">Engine Local + Remotion</div>
                    <p className="text-sm text-text-muted">
                      O ambiente de execução. Aqui é onde a mágica acontece no seu
                      navegador. Arquitetura em código puro que você roda localmente,
                      sem taxas invisíveis.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-neon-ciano/10 text-neon-ciano">
                    <Zap size={18} />
                  </div>
                  <div>
                    <div className="font-semibold">Claude ou Gemini Pro</div>
                    <p className="text-sm text-text-muted">
                      Eles vão atuar como seu assistente criativo. Você pode começar
                      na conta de graça. A única coisa que limitará sua escala de
                      produção é a quantidade de mensagens diárias.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card direito: trincheira vs nova era */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glass self-center p-7"
            >
              <h3 className="font-display text-xl font-bold">A Trincheira <span className="text-text-dim">vs.</span> A Nova Era</h3>
              <p className="mt-2 text-sm text-text-muted">
                Enquanto a edição braçal drena 8 horas em softwares pesados, o
                assistente orquestra o roteiro e a codificação de forma brutal.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em]">
                    <span className="flex items-center gap-2 text-red-400">
                      <Clock size={12} /> Método Antigo (After Effects)
                    </span>
                    <span className="text-red-400">8 horas</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-bg-line">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-700"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em]">
                    <span className="flex items-center gap-2 text-neon-green">
                      <Zap size={12} /> Sistema Autônomo
                    </span>
                    <span className="text-neon-green">30 minutos</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-bg-line">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '6%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                      className="h-full rounded-full bg-gradient-to-r from-neon-green to-neon-deep shadow-[0_0_12px_rgba(57,255,139,0.6)]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
