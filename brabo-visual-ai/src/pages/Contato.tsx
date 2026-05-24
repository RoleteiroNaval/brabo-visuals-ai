import { motion } from 'framer-motion'
import { MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'
import MagneticButton from '../components/effects/MagneticButton'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', whats: '', nicho: '', tipo: 'comercial', estilo: 'dark', prazo: '', msg: '' })
  const [sent, setSent] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const msg = `*Novo briefing — Brabo Visual AI*%0A
*Nome:* ${form.nome}%0A
*WhatsApp:* ${form.whats}%0A
*Nicho:* ${form.nicho}%0A
*Tipo de vídeo:* ${form.tipo}%0A
*Estilo:* ${form.estilo}%0A
*Prazo:* ${form.prazo}%0A
*Mensagem:* ${form.msg}`
    window.open(`https://wa.me/5500000000000?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <section className="relative pt-16 pb-24">
      <div className="container-x grid items-start gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="label-tag"><MessageCircle size={11} className="text-neon-green" /> BRIEFING DIRETO</span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Conta o que você <br /><span className="gradient-text">precisa criar.</span>
          </h1>
          <p className="mt-5 max-w-md text-text-muted">
            Em até 24h você recebe um orçamento personalizado direto no WhatsApp, com
            referências visuais e prazo de entrega.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { t: 'Resposta em até 24h', d: 'Atendimento direto, sem robô.' },
              { t: 'Orçamento sem compromisso', d: 'Conhece o investimento antes de fechar.' },
              { t: 'Referências visuais inclusas', d: 'Você vê o estilo antes da produção.' },
            ].map((b) => (
              <div key={b.t} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neon-green shadow-[0_0_10px_#39FF8B]" />
                <div>
                  <div className="font-semibold">{b.t}</div>
                  <div className="text-sm text-text-muted">{b.d}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-glass space-y-4 p-7 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Seu nome" value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} />
            <Field label="WhatsApp" value={form.whats} onChange={(v) => setForm({ ...form, whats: v })} />
          </div>
          <Field label="Nicho do negócio" value={form.nicho} onChange={(v) => setForm({ ...form, nicho: v })} />

          <div className="grid gap-4 sm:grid-cols-2">
            <Select label="Tipo de vídeo" value={form.tipo} onChange={(v) => setForm({ ...form, tipo: v })}
              opts={['comercial', 'reels', 'institucional', 'produto', 'manifesto']} />
            <Select label="Estilo" value={form.estilo} onChange={(v) => setForm({ ...form, estilo: v })}
              opts={['dark', 'realista', 'luxo', 'futurista', 'minimal']} />
          </div>

          <Field label="Prazo desejado" value={form.prazo} onChange={(v) => setForm({ ...form, prazo: v })} placeholder="Ex: 7 dias" />

          <div>
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">Conte mais</label>
            <textarea
              value={form.msg}
              onChange={(e) => setForm({ ...form, msg: e.target.value })}
              rows={4}
              className="mt-1.5 w-full rounded-lg border border-bg-line bg-bg-soft px-4 py-3 text-sm outline-none transition-colors placeholder:text-text-dim focus:border-neon-green/50"
              placeholder="Briefing, objetivo da campanha, referências..."
            />
          </div>

          <MagneticButton className="btn-primary w-full">
            <Send size={14} /> Enviar briefing por WhatsApp
          </MagneticButton>

          {sent && (
            <div className="rounded-lg border border-neon-green/30 bg-neon-green/10 px-4 py-3 text-sm text-neon-green">
              ✓ Abrindo WhatsApp... fechamos por lá.
            </div>
          )}
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-bg-line bg-bg-soft px-4 py-3 text-sm outline-none transition-colors placeholder:text-text-dim focus:border-neon-green/50"
      />
    </div>
  )
}

function Select({ label, value, onChange, opts }: { label: string; value: string; onChange: (v: string) => void; opts: string[] }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-bg-line bg-bg-soft px-4 py-3 text-sm outline-none transition-colors focus:border-neon-green/50"
      >
        {opts.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
