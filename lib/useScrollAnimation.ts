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

export function useScrollCenter<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [isCentered, setIsCentered] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const checkCenter = () => {
      const rect = element.getBoundingClientRect()
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = window.innerHeight / 2
      const threshold = window.innerHeight * 0.2 // 20% threshold from center

      const isNearCenter = Math.abs(elementCenter - viewportCenter) < threshold
      setIsCentered(isNearCenter)
    }

    window.addEventListener('scroll', checkCenter, { passive: true })
    checkCenter()

    return () => window.removeEventListener('scroll', checkCenter)
  }, [])

  return { ref, isCentered }
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
