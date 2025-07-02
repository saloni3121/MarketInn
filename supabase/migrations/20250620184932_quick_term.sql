/*
  # Fix user signup trigger

  1. Database Functions
    - Create or replace the handle_new_user function that automatically creates a user profile
    - This function will be triggered when a new user signs up via Supabase Auth

  2. Triggers
    - Create trigger on auth.users table to call handle_new_user function
    - This ensures every new user gets a profile record automatically

  3. Security
    - The function runs with security definer privileges to bypass RLS
    - Only creates basic profile with id and email from auth.users
*/

-- Create or replace the function to handle new user signups
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  );
  RETURN NEW;
END;
$$;

-- Drop the trigger if it exists and recreate it
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Create the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();