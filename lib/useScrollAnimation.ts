'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
}

export function useScrollAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, isVisible }
}

export function useParallax() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const scrolled = window.innerHeight - rect.top
      const parallaxBg = element.querySelector('.parallax-bg') as HTMLElement

      if (parallaxBg && rect.top < window.innerHeight && rect.bottom > 0) {
        const speed = 0.3
        const yPos = scrolled * speed
        parallaxBg.style.transform = `translateY(${yPos}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return ref
}
