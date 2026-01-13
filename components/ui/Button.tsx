'use client'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  size?: 'default' | 'sm' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:hover:scale-[1.015] md:hover:shadow-lg hover-effect-item',
          // All buttons are orange, invert on hover
          variant === 'primary' && 'bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary active:bg-cream active:scale-100',
          variant === 'outline' && 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white active:bg-primary-hover active:scale-100',
          // Sizes
          size === 'default' && 'px-7 py-3.5 text-body rounded-lg min-h-[44px]',
          size === 'sm' && 'px-5 py-2.5 text-small rounded-md min-h-[36px]',
          size === 'lg' && 'px-9 py-4 text-body-lg rounded-lg min-h-[52px]',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
