import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserProfile = {
  id: string;
  email: string;
  full_name: string;
  company_name?: string;
  phone?: string;
  industry?: string;
  company_size?: string;
  created_at?: string;
  updated_at?: string;
};

export type CreateUserProfile = {
  id: string;
  email: string;
  full_name: string;
  company_name?: string;
  phone?: string;
  industry?: string;
  company_size?: string;
};