import { supabase } from "@/shared/api/supabaseClient";

export async function updateEmail(email: string) {
  const { data, error } = await supabase.auth.updateUser({ email });

  if (error) {
    throw error;
  }

  return data;
}
