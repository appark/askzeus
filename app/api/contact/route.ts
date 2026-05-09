import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, email, company, service, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { error: sendError } = await resend.emails.send({
      from: 'Ask Zeus <hello@askzeus.io>',
      to: 'hello@askzeus.io',
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          <div style="background: #0B1426; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="color: #38BDF8; margin: 0; font-size: 22px;">⚡ New Ask Zeus Inquiry</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 13px; width: 130px;">Name</td>
              <td style="padding: 10px 0; color: #0B1426; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 13px;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #0EA5E9;">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 13px;">Company</td>
              <td style="padding: 10px 0; color: #0B1426;">${company}</td>
            </tr>` : ''}
            ${service ? `
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 13px;">Service</td>
              <td style="padding: 10px 0; color: #0B1426;">${service}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 24px; padding: 20px; background: white; border-radius: 8px; border-left: 4px solid #0EA5E9;">
            <p style="color: #64748b; font-size: 13px; margin: 0 0 8px;">Message</p>
            <p style="color: #0B1426; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 24px; color: #94a3b8; font-size: 12px; text-align: center;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    })

    if (sendError) {
      console.error('Resend error:', sendError)
      return NextResponse.json({ error: sendError.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
