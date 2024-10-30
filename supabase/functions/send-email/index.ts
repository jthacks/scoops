import { serve } from 'https://deno.fresh.run/std@0.168.0/http/server.ts'
import { Resend } from 'resend'

const resend = new Resend('re_L3ZZr6XZ_QJ5Uun33uPwnxp3uiTcKWhTX')

function generateEmailHtml(data: any) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #0284c7; font-size: 24px; margin-bottom: 20px;">
        New Enquiry Details
      </h1>
      
      <div style="font-size: 16px; line-height: 1.5; color: #333;">
        <p style="margin-bottom: 10px;">
          <strong style="color: #0284c7;">Name:</strong> ${data.name}
        </p>
        <p style="margin-bottom: 10px;">
          <strong style="color: #0284c7;">Email:</strong> ${data.email}
        </p>
        <p style="margin-bottom: 10px;">
          <strong style="color: #0284c7;">Phone:</strong> ${data.phone || 'Not provided'}
        </p>
        <p style="margin-bottom: 10px;">
          <strong style="color: #0284c7;">Number of Dogs:</strong> ${data.number_of_dogs}
        </p>
        <p style="margin-bottom: 10px;">
          <strong style="color: #0284c7;">Visit Frequency:</strong> ${data.visit_frequency} times per month
        </p>
        <p style="margin-bottom: 10px;">
          <strong style="color: #0284c7;">Dog Breeds:</strong> ${data.dog_breeds}
        </p>
        <p style="margin-bottom: 10px;">
          <strong style="color: #0284c7;">Garden Access:</strong> ${data.garden_access}
        </p>
        ${data.additional_notes ? `
          <p style="margin-bottom: 10px;">
            <strong style="color: #0284c7;">Additional Notes:</strong> ${data.additional_notes}
          </p>
        ` : ''}
      </div>
      
      <div style="margin-top: 30px; font-size: 14px; color: #666;">
        <p>This enquiry was submitted through the Pooopa Scooopa website.</p>
      </div>
    </div>
  `
}

serve(async (req) => {
  try {
    const data = await req.json()

    await resend.emails.send({
      from: 'Pooopa Scooopa <notifications@pooopascooopa.com>',
      to: 'thepooopascoopas@gmail.com',
      subject: 'New Enquiry Received',
      html: generateEmailHtml(data)
    })

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { headers: { 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})