import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';


dotenv.config();  // Load environment variables from .env file

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

export { supabase };  // Export the supabase instance
