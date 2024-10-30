import { createClient } from '@supabase/supabase-js';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL');
}

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY');
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function saveEnquiry(data: any) {
  const { data: enquiryData, error } = await supabase
    .from('enquiries')
    .insert([{
      name: data.name,
      email: data.email,
      phone: data.phone,
      number_of_dogs: data.number_of_dogs,
      visit_frequency: data.visit_frequency,
      dog_breeds: data.dog_breeds,
      garden_access: data.garden_access,
      additional_notes: data.additional_notes,
      status: 'new'
    }])
    .select()
    .single();

  if (error) {
    console.error('Failed to save enquiry:', error);
    throw error;
  }

  return enquiryData;
}