'use client'

import { Button } from '@/components/ui/Button'
import { LanguageToggle } from '@/components/ui/LanguageToggle'
import { Translations, Locale } from '@/lib/i18n'

interface HeroProps {
  translations: Translations
  locale: Locale
  onToggleLocale: () => void
  onCtaClick: (category: 'donor' | 'organization' | 'supplier') => void
}

export function Hero({ translations: t, locale, onToggleLocale, onCtaClick }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col overflow-hidden">
      {/* Background with overlay - fades in first */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-hero-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(92, 64, 51, 0.55), rgba(92, 64, 51, 0.55)), url('/images/hero.jpg')`,
        }}
      />

      {/* Navigation - fades in last */}
      <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-6 animate-hero-nav">
        <div className="text-cream font-heading text-h4">Folkets Matsvinn</div>
        <LanguageToggle
          locale={locale}
          onToggle={onToggleLocale}
          label={t.nav.language}
        />
      </nav>

      {/* Hero Content - raised by 10% with adjusted bottom padding */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 pb-[15%]">
        {/* Headline - fades in after background */}
        <h1 className="font-heading text-h1 md:text-[5rem] text-cream mb-2 animate-hero-headline">
          {t.hero.headline}
        </h1>

        {/* Tagline - reduced 25% from h2/h1 to h3/h2 */}
        <p className="text-body-lg md:text-h2 text-cream/90 font-body mb-12 animate-hero-tagline">
          {t.hero.tagline}
        </p>

        {/* CTA Buttons - fade in after tagline */}
        <div className="flex flex-col sm:flex-row gap-4 animate-hero-buttons items-center">
          <Button
            onClick={() => onCtaClick('donor')}
            size="lg"
          >
            {t.hero.cta1}
          </Button>
          <Button
            onClick={() => onCtaClick('organization')}
            size="lg"
          >
            {t.hero.cta2}
          </Button>
          <Button
            onClick={() => onCtaClick('supplier')}
            size="lg"
          >
            {t.hero.cta3}
          </Button>
          {/* Phone button */}
          <a
            href="tel:0737762818"
            className="w-[52px] h-[52px] rounded-full bg-primary text-white border-2 border-primary flex items-center justify-center transition-all duration-200 md:hover:bg-white md:hover:text-primary md:hover:scale-[1.015] md:hover:shadow-lg hover-effect-item"
          >
            <svg
              className="w-6 h-6"
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
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-hero-nav">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-cream/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
