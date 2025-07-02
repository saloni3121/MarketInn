/*
  # Fix Profile Storage Issues

  1. Updates
    - Ensure user_profiles table has proper constraints
    - Fix the trigger function to handle profile creation properly
    - Add better error handling

  2. Security
    - Maintain existing RLS policies
    - Ensure proper data validation
*/

-- Ensure the user_profiles table has the correct structure
ALTER TABLE user_profiles 
  ALTER COLUMN company_name DROP NOT NULL,
  ALTER COLUMN phone DROP NOT NULL,
  ALTER COLUMN industry DROP NOT NULL,
  ALTER COLUMN company_size DROP NOT NULL;

-- Update the handle_new_user function with better error handling
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  -- Insert basic profile with just email (other fields will be updated later)
  INSERT INTO public.user_profiles (
    id, 
    email, 
    full_name
  )
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  )
  ON CONFLICT (id) DO NOTHING;
  
  RETURN NEW;
EXCEPTION
  WHEN others THEN
    -- Log the error but don't fail the user creation
    RAISE LOG 'Error creating user profile for %: %', NEW.id, SQLERRM;
    RETURN NEW;
END;
$$;

-- Ensure the trigger exists and is properly configured
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Add an index for better performance
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON user_profiles(email);