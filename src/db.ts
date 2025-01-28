import { createClient } from '@supabase/supabase-js';

// Replace these with your actual project URL and anon key from Supabase dashboard
const supabaseUrl: string = 'https://gmmpgayqahibfwkgepfr.supabase.co';  // Your Supabase URL
const supabaseAnonKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtbXBnYXlxYWhpYmZ3a2dlcGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNjcyNjIsImV4cCI6MjA1MzY0MzI2Mn0.agZL95pQZPnKAHF4u7kvPkykQhHqMk8AeC-PPREJdVs';  // Your Supabase anon key

// Create a Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export the client to use in other parts of your app
export default supabase;
