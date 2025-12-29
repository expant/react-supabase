import { supabase } from "@/shared/api/supabaseClient";

// profiles.avatar_updated_at
async function updateAvatarUpdatedAt(userId: string) {
  const { error } = await supabase
    .from("profiles")
    .update({ avatar_updated_at: new Date().toISOString() })
    .eq("id", userId);

  if (error) {
    throw error;
  }
}

async function clearAvatarUpdatedAt(userId: string) {
  const { error } = await supabase
    .from("profiles")
    .update({ avatar_updated_at: null })
    .eq("id", userId);

  if (error) {
    throw error;
  }
}

// storage -> avatar files
async function uploadAvatarFile(userId: string, file: File) {
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

async function removeAvatarFile(userId: string) {
  const { error } = await supabase.storage.from("avatars").remove([userId]);

  if (error) {
    throw error;
  }
}

// url util
export function getAvatarUrl(userId: string, updatedAt: string | null) {
  if (!updatedAt) return null;

  const { data } = supabase.storage.from("avatars").getPublicUrl(userId);

  return `${data.publicUrl}?v=${new Date(updatedAt).getTime()}`;
}

// compositions
export async function uploadAvatar(userId: string, file: File) {
  await uploadAvatarFile(userId, file);
  await updateAvatarUpdatedAt(userId);
}

export async function deleteAvatar(userId: string) {
  await removeAvatarFile(userId);
  await clearAvatarUpdatedAt(userId);
}
