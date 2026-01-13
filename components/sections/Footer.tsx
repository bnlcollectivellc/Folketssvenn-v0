'use client'

import { Translations } from '@/lib/i18n'
import { ScrollAnimate } from '@/components/ui/ScrollAnimate'

interface FooterProps {
  translations: Translations['footer']
}

export function Footer({ translations: t }: FooterProps) {
  return (
    <footer className="py-12 bg-cream-muted border-t border-border">
      <div className="max-w-wide mx-auto px-6 md:px-12">
        <ScrollAnimate>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo / Brand */}
            <div className="text-h4 font-heading text-charcoal">
              Folketssvenn
            </div>

            {/* Contact */}
            <div className="flex items-center gap-2 text-charcoal-secondary">
              <span>{t.phone}:</span>
              <a
                href="tel:0737762818"
                className="text-primary hover:text-primary-hover transition-colors font-medium"
              >
                0737762818
              </a>
            </div>

            {/* Copyright */}
            <p className="text-small text-charcoal-muted">
              {t.copyright}
            </p>
          </div>
        </ScrollAnimate>
      </div>
    </footer>
  )
}
