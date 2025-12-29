import { supabase } from "@/shared/api/supabaseClient";
import type { Profile } from "../model/types";

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, username, avatar_updated_at")
    .eq("id", userId)
    .single();

  if (error) {
    throw error;
  }

  return data as Profile;
}

export async function updateUsername(userId: string, username: string) {
  const { error } = await supabase
    .from("profiles")
    .update({ username })
    .eq("id", userId);

  if (error) {
    throw error;
  }
}

export async function deleteAccount(userId: string) {
  const { error } = await supabase.from("profiles").delete().eq("id", userId);

  if (error) {
    throw error;
  }

  await supabase.auth.signOut({ scope: "local" });
}
