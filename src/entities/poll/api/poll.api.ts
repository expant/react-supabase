import { supabase } from "@/shared/api/supabaseClient";
import { POLL_SELECT } from "./poll.selects";
import type { Poll } from "../model/types";

export async function getPolls() {
  const { data, error } = await supabase
    .from("polls")
    .select(POLL_SELECT)
    .order("created_at", { ascending: false })
    .order("position", { referencedTable: "poll_options", ascending: true });

  if (error) {
    console.error("Error fetching polls:", error);
    return [];
  }

  return data as unknown as Poll[];
}

export async function getPollsByAuthor(authorId: string) {
  const { data, error } = await supabase
    .from("polls")
    .select(POLL_SELECT)
    .eq("author_id", authorId)
    .order("created_at", { ascending: false })
    .order("position", { referencedTable: "poll_options", ascending: true });

  if (error) {
    console.error("Error fetching user polls:", error);
    return [];
  }

  return data as unknown as Poll[];
}
