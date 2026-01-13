'use client'

import { cn } from '@/lib/utils'
import { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  backLabel?: string
}

export function Modal({ isOpen, onClose, children, backLabel = 'Back' }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop - click to close */}
      <div
        className={cn(
          'absolute inset-0 bg-charcoal/50 backdrop-blur-sm cursor-pointer',
          'animate-fade-in'
        )}
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Modal */}
      <div
        className={cn(
          'relative w-full max-w-md bg-white rounded-2xl shadow-modal p-8',
          'animate-scale-in'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Back button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 flex items-center gap-2 text-charcoal-secondary hover:text-charcoal transition-colors"
          aria-label={backLabel}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="text-small font-medium">{backLabel}</span>
        </button>

        {/* Content */}
        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  )
}
