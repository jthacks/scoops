-- Create the trigger function for email notifications
create or replace function notify_enquiry() 
returns trigger as $$
begin
  perform supabase_functions.http_request(
    'https://vlpnkfrjdlocgtluwgti.supabase.co/functions/v1/notify-enquiry',
    'POST',
    jsonb_build_object('Content-Type', 'application/json'),
    jsonb_build_object('record', row_to_json(new))::text
  );
  return new;
end;
$$ language plpgsql security definer;

-- Create the trigger for email notifications
create trigger on_enquiry_created
  after insert on enquiries
  for each row
  execute procedure notify_enquiry();