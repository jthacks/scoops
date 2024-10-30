## Setup Instructions

1. Install Supabase CLI if not already installed

2. Deploy the function:
   ```bash
   supabase functions deploy notify-enquiry
   ```

3. Create a Database Trigger in Supabase SQL Editor:
   ```sql
   create trigger on_enquiry_created
      after insert on enquiries
      for each row execute function supabase_functions.http_request(
        'https://vlpnkfrjdlocgtluwgti.supabase.co/functions/v1/notify-enquiry',
        'POST',
        '{"Content-Type":"application/json"}',
        '{"record":' || row_to_json(NEW) || '}'
      );
   ```

Note: Enquiries will be handled through Typeform's built-in notification system.</content>