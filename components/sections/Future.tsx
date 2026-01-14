'use client'

import { Translations } from '@/lib/i18n'
import { ScrollAnimate } from '@/components/ui/ScrollAnimate'

interface FutureProps {
  translations: Translations['sections']['future']
}

export function Future({ translations: t }: FutureProps) {
  return (
    <section className="py-section-md md:py-section-lg bg-cream">
      <div className="max-w-wide mx-auto px-6 md:px-12">
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

          {/* Visual element - timeline/cards */}
          <div className="space-y-6">
            <ScrollAnimate direction="right">
              <div className="p-6 bg-sand-light rounded-xl border-l-4 border-secondary transition-all duration-200 md:hover:scale-[1.02] md:hover:shadow-lg cursor-default hover-effect-item">
                <div className="text-small font-semibold text-secondary-hover uppercase tracking-wide mb-2">
                  Mars 2026
                </div>
                <p className="text-body text-charcoal">
                  7 Willys Stockholm
                </p>
              </div>
            </ScrollAnimate>
            <ScrollAnimate direction="right" delay={100}>
              <div className="p-6 bg-terracotta-muted rounded-xl border-l-4 border-accent transition-all duration-200 md:hover:scale-[1.02] md:hover:shadow-lg cursor-default hover-effect-item">
                <div className="text-small font-semibold text-accent-hover uppercase tracking-wide mb-2">
                  Örebro
                </div>
                <p className="text-body text-charcoal">
                  50+ pallar kladdkaka/morotskaka
                </p>
              </div>
            </ScrollAnimate>
            <ScrollAnimate direction="right" delay={200}>
              <div className="p-6 bg-primary-muted rounded-xl border-l-4 border-primary transition-all duration-200 md:hover:scale-[1.02] md:hover:shadow-lg cursor-default hover-effect-item">
                <div className="text-small font-semibold text-primary-hover uppercase tracking-wide mb-2">
                  Snart
                </div>
                <p className="text-body text-charcoal">
                  30 pallar saft till Årsta
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </section>
  )
}
