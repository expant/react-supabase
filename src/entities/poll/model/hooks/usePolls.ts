import { useEffect } from "react";
import { usePollsStore } from "../store";
import { useUser } from "@/features/auth/model/hooks/useUser";

export function usePolls() {
  const store = usePollsStore();
  const user = useUser();

  useEffect(() => {
    const { unsubscribeFromNewPolls, unsubscribeFromPollVotesCount } =
      store.initSubscriptions(user.id);

    store.loadFeed();

    return () => {
      unsubscribeFromNewPolls();
      unsubscribeFromPollVotesCount();
    };
  }, [user.id]);

  return store;
}
