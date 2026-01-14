'use client'

import Image from 'next/image'
import { Translations } from '@/lib/i18n'
import { ScrollAnimate } from '@/components/ui/ScrollAnimate'

interface ChallengeProps {
  translations: Translations['sections']['challenge']
}

export function Challenge({ translations: t }: ChallengeProps) {
  return (
    <section className="py-section-md md:py-section-lg bg-sand-light">
      <div className="max-w-wide mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <ScrollAnimate direction="left">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl transition-all duration-200 md:hover:scale-[1.015] md:hover:shadow-2xl hover-effect-item">
              <Image
                src="/images/challenge.jpg"
                alt="Why we need your help"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollAnimate>

          {/* Content */}
          <div>
            <ScrollAnimate>
              <h2 className="text-h2 md:text-h1 font-heading text-charcoal mb-6 whitespace-pre-line">
                {t.title}
              </h2>
            </ScrollAnimate>

            <ScrollAnimate delay={100}>
              <div className="text-body-lg text-charcoal-secondary whitespace-pre-line leading-relaxed">
                {t.content}
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </section>
  )
}
