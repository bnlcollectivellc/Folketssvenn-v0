'use client'

import Image from 'next/image'
import { Translations } from '@/lib/i18n'
import { ScrollAnimate } from '@/components/ui/ScrollAnimate'

interface OriginProps {
  translations: Translations['sections']['origin']
}

export function Origin({ translations: t }: OriginProps) {
  return (
    <section className="relative bg-cream">
      {/* Overlapping image container - pulls up into hero */}
      <div className="max-w-wide mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Image - overlaps into hero section */}
          <ScrollAnimate direction="left" className="order-2 md:order-1 -mt-24 md:-mt-32">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/origin.jpg"
                alt="The beginning of Folketssvenn"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollAnimate>

          {/* Content */}
          <div className="order-1 md:order-2 pt-12 md:pt-16 pb-section-md md:pb-section-lg">
            <ScrollAnimate>
              <h2 className="text-h2 md:text-h1 font-heading text-charcoal mb-6">
                {t.title}
              </h2>
            </ScrollAnimate>
            <ScrollAnimate delay={100}>
              <p className="text-h4 font-heading text-primary italic mb-6">
                {t.intro}
              </p>
            </ScrollAnimate>
            <ScrollAnimate delay={200}>
              <p className="text-body-lg text-charcoal-secondary whitespace-pre-line leading-relaxed">
                {t.content}
              </p>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </section>
  )
}
