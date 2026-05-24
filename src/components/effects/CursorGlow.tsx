import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 220, damping: 22, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 22, mass: 0.4 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Só ativa em telas grandes (sem touch)
    if (window.matchMedia('(pointer: fine)').matches) {
      setEnabled(true)
    }
    function move(e: MouseEvent) {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100]"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
    >
      <div
        className="h-[420px] w-[420px] rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(57,255,139,0.18) 0%, rgba(0,229,255,0.06) 35%, transparent 65%)',
          filter: 'blur(20px)',
        }}
      />
    </motion.div>
  )
}
