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

export function getAvatarUrl(userId: string, updatedAt: string | null) {
  if (!updatedAt) return null;

  const { data } = supabase.storage.from("avatars").getPublicUrl(userId);

  return `${data.publicUrl}?v=${new Date(updatedAt).getTime()}`;
}

export async function updateAvatarUpdatedAt(userId: string) {
  const { error } = await supabase
    .from("profiles")
    .update({ avatar_updated_at: new Date().toISOString() })
    .eq("id", userId);

  if (error) {
    throw error;
  }
}

export async function uploadAvatar(userId: string, file: File) {
  const { error } = await supabase.storage
    .from("avatars")
    .upload(userId, file, {
      upsert: true,
      contentType: file.type,
      cacheControl: "3600",
    });

  if (error) {
    throw error;
  }
}
