import { Resend } from 'resend';
import { ContactFormData } from '@/types/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEnquiryEmail(data: ContactFormData) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('Missing RESEND_API_KEY');
  }

  try {
    const result = await resend.emails.send({
      from: 'Pooopa Scooopa <onboarding@resend.dev>',
      to: ['thepooopascoopas@gmail.com'],
      subject: 'New Enquiry Received',
      html: generateEmailHtml(data),
    });

    return result;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}

function generateEmailHtml(data: ContactFormData) {
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
          <strong style="color: #0284c7;">Number of Dogs:</strong> ${data.numberOfDogs}
        </p>
        <p style="margin-bottom: 10px;">
          <strong style="color: #0284c7;">Visit Frequency:</strong> ${data.visitFrequency}
        </p>
        <p style="margin-bottom: 10px;">
          <strong style="color: #0284c7;">Dog Breeds:</strong> ${data.dogBreeds}
        </p>
        <p style="margin-bottom: 10px;">
          <strong style="color: #0284c7;">Garden Access:</strong> ${data.gardenAccess}
        </p>
        ${data.additionalNotes ? `
          <p style="margin-bottom: 10px;">
            <strong style="color: #0284c7;">Additional Notes:</strong> ${data.additionalNotes}
          </p>
        ` : ''}
      </div>
      
      <div style="margin-top: 30px; font-size: 14px; color: #666;">
        <p>This enquiry was submitted through the Pooopa Scooopa website.</p>
      </div>
    </div>
  `;
}