'use client'

import { Translations } from '@/lib/i18n'
import { ScrollAnimate, ParallaxSection } from '@/components/ui/ScrollAnimate'

interface ChallengeProps {
  translations: Translations['sections']['challenge']
}

export function Challenge({ translations: t }: ChallengeProps) {
  return (
    <ParallaxSection
      backgroundImage="/images/hero.jpg"
      overlayColor="rgba(240, 221, 208, 0.92)"
      className="pt-section-md md:pt-section-lg pb-section-md md:pb-section-lg"
    >
      <div className="max-w-narrow mx-auto px-6 md:px-12 text-center">
        <ScrollAnimate>
          <h2 className="text-h2 md:text-h1 font-heading text-charcoal mb-8">
            {t.title}
          </h2>
        </ScrollAnimate>

        <ScrollAnimate delay={100}>
          <div className="text-body-lg text-charcoal/90 whitespace-pre-line leading-relaxed text-left">
            {t.content}
          </div>
        </ScrollAnimate>

        {/* Visual accent */}
        <ScrollAnimate delay={200}>
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-primary rounded-full" />
          </div>
        </ScrollAnimate>
      </div>
    </ParallaxSection>
  )
}
