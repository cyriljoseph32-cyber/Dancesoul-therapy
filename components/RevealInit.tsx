'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Adds .in to [data-reveal] elements as they enter the viewport.
export default function RevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]:not(.in)')
    if (!els.length) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return null
}
