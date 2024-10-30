-- Enable the http extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "http" WITH SCHEMA extensions;

-- Create the trigger function for logging notifications
CREATE OR REPLACE FUNCTION notify_enquiry() 
RETURNS trigger AS $$
BEGIN
  PERFORM net.http_post(
    'https://vlpnkfrjdlocgtluwgti.supabase.co/functions/v1/notify-enquiry',
    jsonb_build_object('record', row_to_json(NEW))::text,
    'application/json'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger for notifications
DROP TRIGGER IF EXISTS on_enquiry_created ON enquiries;
CREATE TRIGGER on_enquiry_created
  AFTER INSERT ON enquiries
  FOR EACH ROW
  EXECUTE PROCEDURE notify_enquiry();