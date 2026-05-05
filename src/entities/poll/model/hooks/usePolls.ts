import { useEffect } from "react";
import { usePollsStore } from "../store";
import { useUser } from "@/features/auth/model/hooks/useUser";

export function usePolls() {
  const user = useUser();
  const store = usePollsStore();
  const loadFeed = usePollsStore((s) => s.loadFeed);
  const initSubscriptions = usePollsStore((s) => s.initSubscriptions);

  useEffect(() => {
    const { unsubscribeFromNewPolls, unsubscribeFromPollVotesCount } =
      initSubscriptions(user.id);

    loadFeed();

    return () => {
      unsubscribeFromNewPolls();
      unsubscribeFromPollVotesCount();
    };
  }, [user.id, initSubscriptions, loadFeed]);

  return store;
}
