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
          backgroundImage: `linear-gradient(rgba(44, 44, 44, 0.55), rgba(44, 44, 44, 0.55)), url('/images/hero.jpg')`,
        }}
      />

      {/* Navigation - fades in last */}
      <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-6 animate-hero-nav">
        <div className="text-cream font-heading text-h4">Folketssvenn</div>
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
        <div className="flex flex-col sm:flex-row gap-4 animate-hero-buttons">
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
        </div>

        {/* Phone number */}
        <a
          href="tel:0737762818"
          className="mt-6 text-body-lg text-cream/80 hover:text-cream transition-colors animate-hero-buttons"
        >
          0737762818
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-hero-nav">
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
