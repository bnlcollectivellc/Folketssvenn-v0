'use client'

import { useState, useEffect } from 'react'
import { Modal } from '@/components/ui/Modal'
import { ContactForm } from '@/components/forms/ContactForm'
import { Hero } from '@/components/sections/Hero'
import { Origin } from '@/components/sections/Origin'
import { Impact } from '@/components/sections/Impact'
import { Partners } from '@/components/sections/Partners'
import { Challenge } from '@/components/sections/Challenge'
import { Future } from '@/components/sections/Future'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'
import { getTranslations, Locale, defaultLocale } from '@/lib/i18n'

type Category = 'donor' | 'organization' | 'supplier'

export default function Home() {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Category>('donor')

  // Load saved locale from localStorage
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && (savedLocale === 'sv' || savedLocale === 'en')) {
      setLocale(savedLocale)
    }
  }, [])

  const t = getTranslations(locale)

  const toggleLocale = () => {
    const newLocale = locale === 'sv' ? 'en' : 'sv'
    setLocale(newLocale)
    localStorage.setItem('locale', newLocale)
    document.documentElement.lang = newLocale
  }

  const handleCtaClick = (category: Category) => {
    setSelectedCategory(category)
    setIsModalOpen(true)
  }

  return (
    <main>
      <Hero
        translations={t}
        locale={locale}
        onToggleLocale={toggleLocale}
        onCtaClick={handleCtaClick}
      />

      <Origin translations={t.sections.origin} />

      <Impact translations={t.sections.impact} />

      <Partners translations={t.sections.partners} />

      <Challenge translations={t.sections.challenge} />

      <Future translations={t.sections.future} />

      <FinalCTA
        translations={t.sections.cta}
        onCtaClick={handleCtaClick}
        ctaLabels={{
          cta1: t.hero.cta1,
          cta2: t.hero.cta2,
          cta3: t.hero.cta3,
        }}
      />

      <Footer translations={t.footer} />

      {/* Contact Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        backLabel={t.form.back}
      >
        <ContactForm
          translations={t.form}
          defaultCategory={selectedCategory}
        />
      </Modal>
    </main>
  )
}
