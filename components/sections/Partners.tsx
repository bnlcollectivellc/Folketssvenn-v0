'use client'

import Image from 'next/image'
import { Translations } from '@/lib/i18n'
import { ScrollAnimate } from '@/components/ui/ScrollAnimate'

interface PartnersProps {
  translations: Translations['sections']['partners']
}

const partnerLogos = [
  { name: 'Röda Korset', logo: '/images/logos/Flag_of_the_Red_Cross.svg.png' },
  { name: 'Matmissionen', logo: '/images/logos/Matmissionen_rund_rgb-1024x1024.png' },
  { name: 'Vid Din Sida', logo: '/images/logos/logoviddinsida.png' },
  { name: 'OLIO', logo: '/images/logos/Olio_circle_logo-1.jpg' },
  { name: 'Costco', logo: '/images/logos/Costco-Logo.wine.svg' },
]

export function Partners({ translations: t }: PartnersProps) {
  // Double the logos for seamless infinite scroll
  const doubledLogos = [...partnerLogos, ...partnerLogos]

  return (
    <>
      {/* Partners content section */}
      <section className="pt-16 md:pt-[59px] pb-[53px] md:pb-[70px] bg-cream">
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
      <div className="relative bg-terracotta py-6 md:py-8 overflow-hidden">
        <div className="marquee-track">
          {doubledLogos.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-8 md:px-12 shrink-0 transition-all duration-200 md:hover:scale-[1.025]"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white shrink-0 transition-all duration-200 md:hover:shadow-lg border-2 border-white/30 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full p-1"
                />
              </div>
              <span className="text-body font-medium text-white whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
