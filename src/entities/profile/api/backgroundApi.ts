import { supabase } from "@/shared/api/supabaseClient";

const BUCKET = "backgrounds";

export async function uploadBackground(userId: string, file: File) {
  const filePath = `${userId}/background`

  const { error } = await supabase.storage.from(BUCKET).upload(filePath, file, {
    upsert: true,
    contentType: file.type,
    cacheControl: "3600",
  })

  if (error) throw error
}

export function getBackgroundUrl(userId: string) {
  const { data } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(`${userId}/background`)

  return data.publicUrl
}

