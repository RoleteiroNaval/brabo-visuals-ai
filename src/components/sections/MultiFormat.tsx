import { motion } from 'framer-motion'
import { Play, Maximize2, Settings, Volume2, Cast, ExternalLink } from 'lucide-react'

const tiles = [
  { ratio: 'video', bg: 'from-bg-card to-bg-soft', accent: '#FFD333' },
  { ratio: 'video', bg: 'from-[#B8FF7A] to-[#7EE05A]', accent: '#FFFFFF' },
  { ratio: 'video', bg: 'from-white to-zinc-200', accent: '#FFD333' },
  { ratio: 'video', bg: 'from-zinc-100 to-zinc-300', accent: '#FFD333' },
]

const verticals = [
  { bg: 'from-[#B8FF7A] to-[#7EE05A]' },
  { bg: 'from-[#0A6B52] to-[#003D2E]' },
]

function VideoCard({ vertical = false, gradient, accent = '#FFD333' }: { vertical?: boolean; gradient: string; accent?: string }) {
  return (
    <div className={`relative ${vertical ? 'aspect-[9/16] w-full max-w-[200px]' : 'aspect-video w-full'} overflow-hidden rounded-xl border border-bg-line bg-gradient-to-br ${gradient} shadow-xl`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid h-14 w-14 place-items-center rounded-full shadow-lg" style={{ background: accent }}>
          <Play className="text-bg ml-0.5" size={22} fill="currentColor" />
        </div>
      </div>
      <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2 rounded-md bg-black/40 px-2 py-1.5 text-white backdrop-blur">
        <Play size={11} />
        <Volume2 size={11} />
        <div className="h-1 flex-1 rounded-full bg-white/20">
          <div className="h-full w-1/3 rounded-full" style={{ background: accent }} />
        </div>
        <span className="font-mono text-[9px]">00:00</span>
        <Settings size={11} />
        <Maximize2 size={11} />
        <ExternalLink size={11} />
        <Cast size={11} />
      </div>
    </div>
  )
}

export default function MultiFormat() {
  return (
    <section className="relative py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Um Motor. <span className="gradient-text">Múltiplos Formatos.</span>
          </h2>
          <p className="mt-4 text-text-muted">
            Tudo se encaixa perfeitamente. O mesmo código gera os anúncios em
            <span className="text-text"> 16:9</span> e as versões verticais para
            <span className="text-text"> Reels</span>. Zero retrabalho.
          </p>
        </div>

        <div className="mt-14 grid gap-6">
          {/* 16:9 grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {tiles.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <VideoCard gradient={t.bg} accent={t.accent} />
              </motion.div>
            ))}
          </div>

          {/* 9:16 verticais */}
          <div className="mt-6 flex justify-center gap-6">
            {verticals.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <VideoCard vertical gradient={v.bg} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
