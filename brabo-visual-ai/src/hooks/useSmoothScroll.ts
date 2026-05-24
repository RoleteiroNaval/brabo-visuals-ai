import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Lenis + GSAP ScrollTrigger integrados.
 * O Lenis "dirige" o scroll, e o ScrollTrigger se atualiza no mesmo RAF.
 * Sem essa integração, qualquer pin/scrub fica dessincronizado.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    // Cada scroll do Lenis dispara update do ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Usa o ticker do GSAP em vez de um RAF próprio (sincronia perfeita)
    const onRaf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(onRaf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onRaf)
      lenis.destroy()
    }
  }, [])
}
