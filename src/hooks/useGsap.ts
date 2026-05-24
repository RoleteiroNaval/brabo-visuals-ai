import { useEffect, useRef, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Cria um gsap.context() escopado ao ref, com cleanup automático.
 * O segundo argumento do `gsap.context(setup, scope)` faz todos os seletores
 * dentro do setup serem automaticamente prefixados pelo scope.
 *
 * Ex: dentro do setup, gsap.to('.box', ...) só pega .box DENTRO do ref.
 */
export function useGsap<T extends HTMLElement>(
  setup: (selfRef: T) => void,
  deps: React.DependencyList = []
): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const ctx = gsap.context(() => setup(el), el)
    // Re-mensura o ScrollTrigger após layout estabilizar
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 120)
    return () => {
      window.clearTimeout(id)
      ctx.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
