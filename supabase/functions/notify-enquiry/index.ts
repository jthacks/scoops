// @ts-ignore
import { serve } from 'https://deno.fresh.run/std@0.168.0/http/server.ts'

interface RequestEvent {
  request: Request;
  json(): Promise<any>;
}

interface EnquiryRecord {
  id: string;
  name: string;
  email: string;
  phone?: string;
  number_of_dogs: number;
  visit_frequency: number;
  dog_breeds: string;
  garden_access: string;
  additional_notes?: string;
  status: 'new' | 'contacted' | 'converted' | 'lost';
  created_at: string;
  updated_at: string;
}

serve(async (req: Request) => {
  try {
    const { record } = await req.json() as { record: EnquiryRecord }
    
    if (!record) {
      throw new Error('No enquiry data received')
    }

    // Log the enquiry for monitoring
    console.log('New enquiry received:', record)

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error processing enquiry:', error)
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }),
      { headers: { 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})