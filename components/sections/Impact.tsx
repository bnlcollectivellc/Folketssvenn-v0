'use client'

import Image from 'next/image'
import { Translations } from '@/lib/i18n'
import { ScrollAnimate, ParallaxSection } from '@/components/ui/ScrollAnimate'

interface ImpactProps {
  translations: Translations['sections']['impact']
}

export function Impact({ translations: t }: ImpactProps) {
  const stats = [
    { value: t.stats.pallets, label: t.stats.palletsLabel },
    { value: t.stats.orgs, label: t.stats.orgsLabel },
    { value: t.stats.months, label: t.stats.monthsLabel },
  ]

  return (
    <ParallaxSection
      backgroundImage="/images/warehouse.jpg"
      overlayColor="rgba(247, 243, 237, 0.92)"
      className="py-section-md md:py-section-lg"
    >
      <div className="max-w-wide mx-auto px-6 md:px-12">
        {/* Stats Strip */}
        <div className="grid grid-cols-3 gap-2 md:gap-8 mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <ScrollAnimate key={index} delay={index * 100}>
              <div className="text-center p-3 md:p-8 bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl shadow-sm">
                <div className="text-h2 md:text-[4.5rem] font-heading text-primary leading-none">
                  {stat.value}
                </div>
                <div className="text-xs md:text-body text-charcoal-secondary mt-1 md:mt-2 leading-tight">
                  {stat.label}
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Content */}
          <div>
            <ScrollAnimate>
              <h2 className="text-h2 md:text-h1 font-heading text-charcoal mb-6">
                {t.title}
              </h2>
            </ScrollAnimate>
            <ScrollAnimate delay={100}>
              <div className="text-body-lg text-charcoal-secondary whitespace-pre-line leading-relaxed">
                {t.content}
              </div>
            </ScrollAnimate>
          </div>

          {/* Image */}
          <ScrollAnimate direction="right">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/warehouse.jpg"
                alt="Food rescue warehouse"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </ParallaxSection>
  )
}
