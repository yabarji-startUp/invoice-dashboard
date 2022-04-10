import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://geofqwfhbzpfqqnahrpj.supabase.co';

const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTc3MjcyNCwiZXhwIjoxOTU3MzQ4NzI0fQ.VxdUkuextsCKt4jNYv-tF7TQpB3iLgKSmhDIy41yZYk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
