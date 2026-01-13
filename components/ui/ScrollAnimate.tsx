'use client'

import { useScrollAnimation, useParallax, useScrollCenter } from '@/lib/useScrollAnimation'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ScrollAnimateProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right'
  delay?: number
}

export function ScrollAnimate({
  children,
  className,
  direction = 'up',
  delay = 0,
}: ScrollAnimateProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  const directionClass = {
    up: 'scroll-animate',
    left: 'scroll-animate scroll-animate-left',
    right: 'scroll-animate scroll-animate-right',
  }[direction]

  return (
    <div
      ref={ref}
      className={cn(directionClass, isVisible && 'is-visible', className)}
      style={{ animationDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  )
}

interface ParallaxSectionProps {
  children: ReactNode
  backgroundImage: string
  overlayColor?: string
  overlayOpacity?: number
  className?: string
}

interface HoverEffectProps {
  children: ReactNode
  className?: string
}

export function HoverEffect({
  children,
  className,
}: HoverEffectProps) {
  const { ref, isCentered } = useScrollCenter<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-200 hover-effect-item',
        // Mobile: add centered class when in center of viewport
        isCentered && 'mobile-centered',
        className
      )}
    >
      {children}
    </div>
  )
}

export function ParallaxSection({
  children,
  backgroundImage,
  overlayColor = 'rgba(247, 243, 237, 0.85)',
  className,
}: ParallaxSectionProps) {
  const parallaxRef = useParallax()

  return (
    <div ref={parallaxRef} className={cn('parallax-container relative', className)}>
      {/* Parallax background */}
      <div
        className="parallax-bg"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />
      {/* Color overlay for legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundColor: overlayColor }}
      />
      {/* Content */}
      <div className="relative z-[2]">{children}</div>
    </div>
  )
}
