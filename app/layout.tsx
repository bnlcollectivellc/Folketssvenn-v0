import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Folkets Matsvinn - Från överflöd till omtanke',
  description: 'Folkets Matsvinn räddar mat i Stockholm. Vi delar ut pallvis med mat till behövande, organisationer och sopkök. Stöd vårt arbete eller hämta mat hos oss.',
  keywords: 'matsvinn, rädda mat, mathjälp Stockholm, donera mat, matmissionen',
  openGraph: {
    title: 'Folkets Matsvinn - Från överflöd till omtanke',
    description: 'Folkets Matsvinn räddar mat i Stockholm. Vi delar ut pallvis med mat till behövande, organisationer och sopkök.',
    type: 'website',
    locale: 'sv_SE',
    alternateLocale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
