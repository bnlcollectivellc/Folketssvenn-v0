'use client'

import { cn } from '@/lib/utils'
import { Locale } from '@/lib/i18n'

interface LanguageToggleProps {
  locale: Locale
  onToggle: () => void
  label: string
  className?: string
}

export function LanguageToggle({ locale, onToggle, label, className }: LanguageToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        'px-4 py-2 text-small font-semibold rounded-md',
        'bg-primary text-white border-2 border-primary',
        'hover:bg-white hover:text-primary',
        'transition-all duration-200',
        className
      )}
      aria-label={`Switch to ${locale === 'sv' ? 'English' : 'Swedish'}`}
    >
      {label}
    </button>
  )
}
