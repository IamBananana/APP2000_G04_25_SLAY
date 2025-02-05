import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_ANON_KEY as string
  );
export default supabase;