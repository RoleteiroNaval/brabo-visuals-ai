import { useEffect, useState } from 'react'

export function useCountdown(targetHoursFromNow = 7, targetMinutes = 7) {
  const [target] = useState(() => {
    const t = new Date()
    t.setHours(t.getHours() + targetHoursFromNow)
    t.setMinutes(t.getMinutes() + targetMinutes)
    return t.getTime()
  })

  const [remaining, setRemaining] = useState(() => target - Date.now())

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(0, target - Date.now()))
    }, 1000)
    return () => clearInterval(id)
  }, [target])

  const totalSeconds = Math.floor(remaining / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const pad = (n: number) => String(n).padStart(2, '0')
  return { hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds), done: remaining <= 0 }
}
