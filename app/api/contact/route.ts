import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { ContactFormData } from '@/types/contact';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

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

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactFormData;
    
    // Insert into Supabase
    const { error: supabaseError } = await supabase
      .from('enquiries')
      .insert([{
        name: body.name,
        email: body.email,
        phone: body.phone,
        number_of_dogs: body.numberOfDogs,
        visit_frequency: body.visitFrequency,
        dog_breeds: body.dogBreeds,
        garden_access: body.gardenAccess,
        additional_notes: body.additionalNotes,
        status: 'new'
      }]);

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      throw new Error('Failed to save to database');
    }

    // Send email notification
    if (!process.env.RESEND_API_KEY) {
      throw new Error('Missing RESEND_API_KEY');
    }

    const { error: emailError } = await resend.emails.send({
      from: 'Pooopa Scooopa <onboarding@resend.dev>',
      to: ['thepooopascoopas@gmail.com'],
      subject: 'New Enquiry Received',
      html: generateEmailHtml(body),
    });

    if (emailError) {
      console.error('Email error:', emailError);
      throw new Error('Failed to send email notification');
    }

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}