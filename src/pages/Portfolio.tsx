import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useState } from 'react'
import { portfolio } from '../data/videos'

const categories = ['Todos', 'Comercial', 'Reels', 'Premium', 'Dark', 'Motion']

export default function Portfolio() {
  const [filter, setFilter] = useState('Todos')
  const filtered = filter === 'Todos' ? portfolio : portfolio.filter((v) => v.category === filter)

  return (
    <section className="relative pt-16 pb-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="label-tag"><span className="glow-dot" /> Showreel</span>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight md:text-6xl">
            Trabalhos que <span className="gradient-text">vendem.</span>
          </h1>
          <p className="mt-4 text-text-muted">
            Comerciais, reels e campanhas criadas com IA + edição humana.
            Selecione um nicho para filtrar.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all ${
                filter === c
                  ? 'border-neon-green bg-neon-green text-bg'
                  : 'border-bg-line bg-bg-card text-text-muted hover:border-neon-green/40 hover:text-text'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((v, i) => (
            <motion.article
              key={v.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group card-glass relative overflow-hidden ${v.ratio === '9:16' ? 'row-span-2' : ''}`}
            >
              <div
                className={`relative ${v.ratio === '9:16' ? 'aspect-[9/16]' : 'aspect-video'} overflow-hidden`}
                style={{ background: `linear-gradient(135deg, ${v.color}, #0A0E14)` }}
              >
                <div className="absolute inset-0 grid place-items-center">
                  <div className="relative">
                    <div className="absolute -inset-6 rounded-full bg-neon-green/10 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                    <div className="relative grid h-14 w-14 place-items-center rounded-full border border-neon-green/40 bg-bg-card/70 backdrop-blur transition-transform group-hover:scale-110">
                      <Play size={20} className="text-neon-green" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <span className="absolute top-3 left-3 rounded-md border border-bg-line bg-bg/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neon-green backdrop-blur">
                  {v.category}
                </span>
                <span className="absolute top-3 right-3 rounded-md bg-bg/70 px-2 py-1 font-mono text-[10px] text-text-muted backdrop-blur">
                  {v.ratio}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{v.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
