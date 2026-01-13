'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { Translations } from '@/lib/i18n'

type Category = 'donor' | 'organization' | 'supplier' | 'other'

interface ContactFormProps {
  translations: Translations['form']
  defaultCategory?: Category
}

export function ContactForm({ translations: t, defaultCategory = 'other' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: defaultCategory,
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', category: defaultCategory, message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClasses = cn(
    'w-full px-4 py-3.5 text-body bg-white border-2 border-border rounded-lg',
    'placeholder:text-charcoal-muted',
    'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15',
    'transition-all duration-150'
  )

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-muted flex items-center justify-center">
          <svg
            className="w-8 h-8 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-body-lg text-charcoal">{t.success}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-h3 font-heading text-charcoal mb-6">{t.title}</h2>

      <div>
        <label htmlFor="name" className="block text-small font-medium text-charcoal mb-1.5">
          {t.name} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-small font-medium text-charcoal mb-1.5">
          {t.email} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-small font-medium text-charcoal mb-1.5">
          {t.phone}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-small font-medium text-charcoal mb-1.5">
          {t.category}
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className={cn(inputClasses, 'appearance-none cursor-pointer')}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%238A8A8A'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 1rem center',
            backgroundSize: '1.25rem',
          }}
        >
          <option value="donor">{t.categories.donor}</option>
          <option value="organization">{t.categories.organization}</option>
          <option value="supplier">{t.categories.supplier}</option>
          <option value="other">{t.categories.other}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-small font-medium text-charcoal mb-1.5">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={cn(inputClasses, 'resize-none')}
        />
      </div>

      {status === 'error' && (
        <p className="text-small text-error">{t.error}</p>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        className="w-full"
      >
        {status === 'loading' ? t.sending : t.submit}
      </Button>
    </form>
  )
}
