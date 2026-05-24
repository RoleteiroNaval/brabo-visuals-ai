import { motion } from 'framer-motion'
import { FileCode2, FileText, Folder, FolderOpen } from 'lucide-react'

export default function CodeControl() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-grid-fade opacity-40" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-yellow-400">
            Controle Absoluto via Código
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Você no Controle do <br />
            <span className="gradient-text">Diretor de Motion.</span>
          </h2>
          <p className="mt-5 max-w-lg text-text-muted">
            Esqueça ficar engessado a interfaces limitadas ou prompts de terceiros.
            Com o domínio do ecossistema, você treina a máquina injetando Skills e
            parâmetros exatos da sua empresa (Cores, Fontes e Curvas de Animação).
            <span className="text-text"> O computador trabalha. Você só orquestra.</span>
          </p>
        </motion.div>

        {/* Mock de IDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-glass overflow-hidden shadow-neon-soft"
        >
          <div className="flex items-center gap-2 border-b border-bg-line bg-bg-soft px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
            <span className="mx-auto font-mono text-xs text-text-muted">diretor-de-motion.md</span>
          </div>
          <div className="grid grid-cols-[180px_1fr] divide-x divide-bg-line">
            <div className="p-3 text-[12px] font-mono">
              <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-text-dim">Explorer</div>
              <div className="flex items-center gap-1.5 text-text"><FolderOpen size={12} className="text-neon-green" /> src</div>
              <div className="ml-3 mt-1 flex items-center gap-1.5 text-text"><FolderOpen size={12} className="text-neon-green" /> projetos</div>
              <div className="ml-6 mt-1 flex items-center gap-1.5 text-text"><Folder size={12} className="text-neon-green" /> Comercial-IA</div>
              <div className="ml-9 mt-1 rounded bg-neon-green/10 px-1.5 py-1 text-neon-green flex items-center gap-1.5">
                <FileCode2 size={12} /> diretor-de-motion.md
              </div>
              <div className="ml-9 mt-1 flex items-center gap-1.5 text-text-muted"><FileCode2 size={12} className="text-yellow-400" /> VideoRoot.tsx</div>
              <div className="ml-9 mt-1 flex items-center gap-1.5 text-text-muted"><FileText size={12} className="text-text-dim" /> Briefing.txt</div>
            </div>

            <div className="bg-bg-soft/40 p-4 font-mono text-[12px] leading-relaxed">
              <div className="text-text"># Skill Diretor de Motion</div>
              <div className="mt-2 text-text-muted">
                &gt; <span className="italic">Definindo regras de orquestração cinematográfica para a inteligência artificial renderizar no Remotion.</span>
              </div>
              <div className="mt-3 text-text-dim">```tsx</div>
              <div className="text-neon-ciano">
                <span className="text-purple-400">import</span> {'{ SkillBrabo }'} <span className="text-purple-400">from</span> <span className="text-yellow-400">'@verbo/os'</span>
              </div>
              <div className="mt-3 text-text">
                <span className="text-neon-green">&lt;SkillBrabo</span>
              </div>
              <div className="ml-3 text-text">
                type=<span className="text-yellow-400">"comercial-premium"</span>
              </div>
              <div className="ml-3 text-text">
                palette=<span className="text-yellow-400">"glassmorphism_dark"</span>
              </div>
              <div className="ml-3 text-text">
                spring=<span className="text-yellow-400">{'{ stiffness: 180, damping: 14 }'}</span>
              </div>
              <div className="text-neon-green">/&gt;</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
