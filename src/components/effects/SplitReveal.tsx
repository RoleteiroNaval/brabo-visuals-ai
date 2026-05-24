import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  byChar?: boolean
  scrub?: boolean
  delay?: number
}

/**
 * Texto que se monta palavra por palavra (ou char por char) conforme entra na viewport.
 * Implementação manual de SplitText (a versão oficial é Club GSAP).
 */
export default function SplitReveal({
  text,
  className = '',
  as: Tag = 'h2',
  byChar = false,
  scrub = false,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const parts = byChar ? Array.from(text) : text.split(' ')
      el.innerHTML = ''
      parts.forEach((p, i) => {
        const wrap = document.createElement('span')
        wrap.className = 'inline-block overflow-hidden align-bottom'
        const inner = document.createElement('span')
        inner.className = 'inline-block'
        inner.style.transform = 'translateY(110%)'
        inner.style.opacity = '0'
        inner.textContent = p === ' ' ? '\u00A0' : p
        wrap.appendChild(inner)
        el.appendChild(wrap)
        if (!byChar && i < parts.length - 1) {
          el.appendChild(document.createTextNode(' '))
        }
      })

      gsap.to(el.querySelectorAll('span > span'), {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay,
        ease: 'power3.out',
        stagger: byChar ? 0.015 : 0.05,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: scrub ? 'bottom 60%' : undefined,
          scrub: scrub ? 0.6 : false,
          toggleActions: scrub ? undefined : 'play none none reverse',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [text, byChar, scrub, delay])

  // @ts-expect-error - tag dinâmica
  return <Tag ref={ref} className={className}>{text}</Tag>
}
