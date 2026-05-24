import { Ticket } from 'lucide-react'
import { useCountdown } from '../../hooks/useCountdown'

export default function TopBar() {
  const { hours, minutes, seconds } = useCountdown(7, 7)
  return (
    <div className="relative z-50 w-full border-b border-bg-line bg-bg-soft/80 backdrop-blur-md">
      <div className="container-x flex flex-col items-center justify-between gap-2 py-2.5 text-[12px] sm:flex-row sm:text-[13px]">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-neon-green/10 text-neon-green">
            <Ticket size={14} />
          </span>
          <span className="font-semibold tracking-wide text-neon-green">VOUCHER 50% OFF ATIVO:</span>
          <span className="text-text-muted">Válido apenas para a <span className="text-text">Primeira Turma</span></span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">Encerra em:</span>
          <span className="rounded-md border border-bg-line bg-bg-card px-3 py-1 font-mono font-semibold text-neon-green">
            {hours}:{minutes}:{seconds}
          </span>
        </div>
      </div>
    </div>
  )
}
