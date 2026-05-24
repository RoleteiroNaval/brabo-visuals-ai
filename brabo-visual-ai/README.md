# Brabo Visual AI Studio — v2 (Cinematográfico)

Site completo estilo Brabo Academy + Active Theory para estúdio de comerciais com IA, portfólio, packs de vídeo e imersão.

## Stack
- **React 18 + Vite + TypeScript**
- **Tailwind CSS** (paleta dark + neon verde/ciano)
- **Framer Motion** (animações declarativas + reveals)
- **GSAP + ScrollTrigger** (cinema, pin, scrub) — **Fase 2**
- **Lenis** (smooth scroll cinematográfico, integrado ao GSAP ticker)
- **React Router** (multi-página)
- Canvas 2D customizado para partículas (sem peso de Three.js)

## Efeitos cinematográficos (Fase 2)

| Seção | Efeito |
|---|---|
| **Hero** | Parallax em 3 camadas (bg, mid, foreground) com scrub |
| **ScrollScene** | Seção **pinada** com 4 frames que trocam ao rolar, HUD lateral com contador e progress |
| **Roadmap** | Linha vertical que **se desenha** com scrub + ícones que acendem ao passar |
| **HorizontalShowcase** | **Scroll vertical → movimento horizontal** dos cards (estilo Apple) |
| **LearnModules** | Reveals com `power3.out` + barra de progresso animada |
| **SplitReveal** | Componente reutilizável word-by-word com scrub opcional |

## Páginas
- `/` — Home (todas as seções cinematográficas)
- `/portfolio` — Showreel com filtro
- `/packs` — 3 packs de venda
- `/imersao` — Página focada do curso
- `/contato` — Briefing → WhatsApp

## Como rodar

```bash
cd brabo-visual-ai
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Arquitetura GSAP

A integração **Lenis + GSAP ScrollTrigger** vive em `src/hooks/useSmoothScroll.ts`:

```ts
// Lenis dirige o scroll, ScrollTrigger se atualiza no ticker do GSAP.
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
```

Componentes usam o hook **`useGsap(setup, deps)`** (`src/hooks/useGsap.ts`)
que cria um `gsap.context()` escopado ao ref e faz cleanup automático.

```tsx
const ref = useGsap<HTMLDivElement>((self) => {
  gsap.to(self.querySelector('.box'), {
    scrollTrigger: { trigger: self, scrub: 1, pin: true },
    x: 500,
  })
}, [])
```

## Estrutura

```
src/
  components/
    effects/
      CursorGlow.tsx              # halo de luz seguindo mouse
      MagneticButton.tsx          # botão com atração magnética
      ParticlesBackground.tsx     # canvas 2D leve
      SplitReveal.tsx             # texto palavra-por-palavra (GSAP)
    layout/
      TopBar.tsx                  # tarja voucher + countdown
      Navbar.tsx
      Footer.tsx
    sections/
      Hero.tsx                    # parallax 3 camadas + terminal animado
      ProblemSolution.tsx
      ScrollScene.tsx             # ★ pinada cinematográfica
      Roadmap.tsx                 # ★ linha desenhando + ícones acendendo
      CodeControl.tsx
      HorizontalShowcase.tsx      # ★ scroll horizontal pinado
      MultiFormat.tsx
      LearnModules.tsx            # ★ reveals GSAP
      Comparison.tsx
      Pricing.tsx
      FAQ.tsx
  hooks/
    useSmoothScroll.ts            # Lenis + GSAP ticker
    useGsap.ts                    # context escopado + cleanup
    useCountdown.ts
  data/                           # videos.ts, modules.ts
  pages/                          # Home, Portfolio, Packs, Imersao, Contato
```

## Tuning de performance

- Todas as camadas com transform usam `will-change-transform`
- `scrub: 0.6–0.8` (smoothing leve, sem lag de input)
- `anticipatePin: 1` evita "jump" ao pinar
- `invalidateOnRefresh: true` re-calcula em resize
- Lenis usa o **ticker do GSAP** (1 RAF compartilhado, sem doble loop)

## Próxima fase (sugestão)

- **Fase 3 absurda** — Three.js / React Three Fiber para 3D no Hero + shaders custom
- Backend Node/Express + Supabase para leads + checkout (Stripe/Hotmart)
