import { supabase } from "@/shared/api/supabaseClient";

export async function deletePoll(pollId: number) {
  const { error } = await supabase
    .from("polls")
    .delete()
    .eq("id", pollId);

  if (error) throw error;
}

