'use client'

import { Button } from '@/components/ui/Button'
import { Translations } from '@/lib/i18n'
import { ScrollAnimate } from '@/components/ui/ScrollAnimate'

interface FinalCTAProps {
  translations: Translations['sections']['cta']
  onCtaClick: (category: 'donor' | 'organization' | 'supplier') => void
  ctaLabels: {
    cta1: string
    cta2: string
    cta3: string
  }
}

export function FinalCTA({ translations: t, onCtaClick, ctaLabels }: FinalCTAProps) {
  return (
    <section className="py-section-md md:py-section-lg bg-charcoal text-cream">
      <div className="max-w-wide mx-auto px-6 md:px-12 text-center">
        <ScrollAnimate>
          <h2 className="text-h2 md:text-h1 font-heading mb-6">
            {t.title}
          </h2>
        </ScrollAnimate>

        <ScrollAnimate delay={100}>
          <p className="text-body-lg text-cream/80 max-w-narrow mx-auto mb-8 whitespace-pre-line">
            {t.content}
          </p>
        </ScrollAnimate>

        {/* Phone number */}
        <ScrollAnimate delay={200}>
          <a
            href={`tel:${t.phone}`}
            className="inline-flex items-center gap-3 text-h3 font-heading text-secondary hover:text-secondary-hover transition-colors mb-12"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {t.phone}
          </a>
        </ScrollAnimate>

        {/* CTA Buttons */}
        <ScrollAnimate delay={300}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => onCtaClick('donor')}
              size="lg"
              className="bg-primary text-white border-primary hover:bg-white hover:text-primary"
            >
              {ctaLabels.cta1}
            </Button>
            <Button
              onClick={() => onCtaClick('organization')}
              size="lg"
              className="bg-primary text-white border-primary hover:bg-white hover:text-primary"
            >
              {ctaLabels.cta2}
            </Button>
            <Button
              onClick={() => onCtaClick('supplier')}
              size="lg"
              className="bg-primary text-white border-primary hover:bg-white hover:text-primary"
            >
              {ctaLabels.cta3}
            </Button>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  )
}
