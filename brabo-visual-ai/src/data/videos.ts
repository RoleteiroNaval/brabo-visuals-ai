export type VideoItem = {
  id: string
  title: string
  category: string
  ratio: '16:9' | '9:16' | '1:1'
  color: string
  desc: string
}

export const portfolio: VideoItem[] = [
  { id: 'v1', title: 'Lançamento SaaS — Login Cinematográfico', category: 'Comercial', ratio: '16:9', color: '#0A0E14', desc: 'Animação de login dark com transição em vitrine Netflix.' },
  { id: 'v2', title: 'Reels para Açaiteria Local', category: 'Reels',     ratio: '9:16', color: '#B8FF7A', desc: 'Anúncio vertical com tipografia gigante e cortes rítmicos.' },
  { id: 'v3', title: 'Comercial Premium — Skincare',          category: 'Premium',  ratio: '16:9', color: '#FFFFFF', desc: 'Hero shots com glassmorphism e bloom suave.' },
  { id: 'v4', title: 'Manifesto Imobiliário Dark',            category: 'Dark',     ratio: '16:9', color: '#0D1218', desc: 'Texto manifesto + B-roll IA + sound design pesado.' },
  { id: 'v5', title: 'Story TikTok para Hamburgueria',        category: 'Reels',    ratio: '9:16', color: '#FFE066', desc: 'Animação de cardápio com motion blur e easing brutal.' },
  { id: 'v6', title: 'Pitch Deck Animado — Startup',          category: 'Motion',   ratio: '16:9', color: '#003D2E', desc: 'Slides cinematográficos para captação de investimento.' },
]

export const packs = [
  {
    id: 'starter',
    name: 'Starter',
    tag: 'Para começar',
    price: 'R$ 197',
    cents: ',00',
    installments: '12x de R$ 20,37',
    desc: '3 vídeos curtos para Reels/TikTok com identidade pronta.',
    features: [
      '3 vídeos verticais (até 30s)',
      'Roteiro + edição inclusos',
      'Entrega em até 5 dias',
      '1 rodada de revisão',
      'Trilha sonora licenciada',
    ],
    highlight: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    tag: 'Mais escolhido',
    price: 'R$ 597',
    cents: ',00',
    installments: '12x de R$ 61,79',
    desc: '10 vídeos com legendas dinâmicas para encher seu calendário de conteúdo.',
    features: [
      '10 vídeos verticais (até 45s)',
      'Legendas animadas estilo Reels',
      'Roteiro persuasivo por vídeo',
      'Entrega em até 10 dias',
      '2 rodadas de revisão',
      'Direitos comerciais inclusos',
    ],
    highlight: true,
  },
  {
    id: 'business',
    name: 'Business',
    tag: 'Escala',
    price: 'R$ 1.497',
    cents: ',00',
    installments: '12x de R$ 154,89',
    desc: '20 vídeos + 1 comercial premium 16:9 para campanhas de tráfego pago.',
    features: [
      '20 vídeos (mix 9:16 e 16:9)',
      '1 comercial premium 30s',
      'Roteiro estratégico por nicho',
      'Sound design exclusivo',
      'Cores e fonts da sua marca',
      'Entrega em até 20 dias',
      '3 rodadas de revisão',
    ],
    highlight: false,
  },
]
