'use client'

import { Translations } from '@/lib/i18n'
import { ScrollAnimate } from '@/components/ui/ScrollAnimate'

interface PartnersProps {
  translations: Translations['sections']['partners']
}

const partnerLogos = [
  { name: 'Röda Korset', symbol: '+', color: '#C95454' },
  { name: 'Matmissionen', symbol: 'M', color: '#7B9E87' },
  { name: 'Vid Din Sida', symbol: 'V', color: '#5A8AC9' },
  { name: 'OLIO', symbol: 'O', color: '#D4A853' },
  { name: 'Costco', symbol: 'C', color: '#E07B54' },
]

export function Partners({ translations: t }: PartnersProps) {
  // Double the logos for seamless infinite scroll
  const doubledLogos = [...partnerLogos, ...partnerLogos]

  return (
    <>
      {/* Partners content section */}
      <section className="pt-section-md md:pt-section-lg pb-12 md:pb-16 bg-cream">
        <div className="max-w-wide mx-auto px-6 md:px-12">
          <ScrollAnimate>
            <h2 className="text-h2 md:text-h1 font-heading text-charcoal text-center mb-6">
              {t.title}
            </h2>
          </ScrollAnimate>

          <ScrollAnimate delay={100}>
            <p className="text-body-lg text-charcoal-secondary text-center max-w-narrow mx-auto whitespace-pre-line">
              {t.content}
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Full-width marquee banner - Section divider */}
      <div className="relative bg-charcoal py-6 md:py-8 overflow-hidden">
        <div className="marquee-track">
          {doubledLogos.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-8 md:px-12 shrink-0"
            >
              <div
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl font-bold text-white shrink-0"
                style={{ backgroundColor: partner.color }}
              >
                {partner.symbol}
              </div>
              <span className="text-body font-medium text-cream whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
