import { useEffect, useState } from "react";
import { message } from "antd";
import type { Poll } from "@/entities/poll/model/types";
import { getPollsByAuthor } from "@/entities/poll/api/poll.api";
import { useUser } from "@/features/auth/model/hooks/useUser";

export function useUserPolls() {
  const user = useUser();

  const [polls, setPolls] = useState<Poll[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setIsLoading(true);

      try {
        const data = await getPollsByAuthor(user.id);
        if (!cancelled) setPolls(data);
      } catch (e) {
        message.error(
          e instanceof Error ? e.message : "Не удалось загрузить ваши опросы"
        );
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [user.id]);

  return { polls, isLoading };
}

