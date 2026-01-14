import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, category, message } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // If Resend API key is configured, send email
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      const categoryLabels: Record<string, string> = {
        donor: 'Donator / Donor',
        organization: 'Organisation / Organization',
        supplier: 'Leverantör / Supplier',
        other: 'Annat / Other',
      }

      await resend.emails.send({
        from: 'Folkets Matsvinn <onboarding@resend.dev>',
        to: ['contact@folketssvenn.com'], // Update with actual email
        subject: `Ny kontakt från ${name} - ${categoryLabels[category] || category}`,
        html: `
          <h2>Ny kontakt från webbplatsen</h2>
          <p><strong>Namn:</strong> ${name}</p>
          <p><strong>E-post:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || 'Ej angivet'}</p>
          <p><strong>Kategori:</strong> ${categoryLabels[category] || category}</p>
          <p><strong>Meddelande:</strong></p>
          <p>${message || 'Inget meddelande'}</p>
        `,
      })
    } else {
      // Log for development without Resend
      console.log('Contact form submission:', { name, email, phone, category, message })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
