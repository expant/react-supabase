import { create } from "zustand";
import { message } from "antd";
import { getPolls } from "../api/poll.api";
import { getUserVotes } from "@/entities/vote/api/voteApi";
import {
  subscribeToNewPolls,
  subscribeToPollVotesCount,
} from "../api/poll.realtime";
import type { PollsStore } from "./types";

let isInitialized = false;

export const usePollsStore = create<PollsStore>((set, get) => ({
  polls: [],
  userVotes: {},
  newPollsCount: 0,
  isLoading: false,

  loadPolls: async () => {
    set({ isLoading: true });
    try {
      const data = await getPolls();
      set({ polls: data });
    } catch (e) {
      message.error(
        e instanceof Error ? e.message : "Не удалось загрузить опросы",
      );
    } finally {
      set({ isLoading: false });
    }
  },

  loadUserVotes: async () => {
    try {
      const data = await getUserVotes();

      if (!data) return;

      const votes = data.reduce(
        (acc, vote) => ({
          ...acc,
          [vote.poll_id]: vote,
        }),
        {},
      );
      set({ userVotes: votes });
    } catch (e) {
      message.error(
        e instanceof Error ? e.message : "Не удалось загрузить голоса",
      );
    }
  },

  showNewPolls: async () => {
    await get().loadPolls();
    set({ newPollsCount: 0 });
  },

  addNewPollCount: () =>
    set((state) => ({
      newPollsCount: state.newPollsCount + 1,
    })),

  loadFeed: async () => {
    set({ isLoading: true });

    try {
      await Promise.all([get().loadPolls(), get().loadUserVotes()]);
    } finally {
      set({ isLoading: false });
    }
  },

  initSubscriptions: (userId: string) => {
    if (isInitialized) {
      return {
        unsubscribeFromNewPolls: async () => "ok" as const,
        unsubscribeFromPollVotesCount: () => {},
      };
    }
    isInitialized = true;

    // Подписка на новые опросы
    const cleanupNewPolls = subscribeToNewPolls((row) => {
      if (row.author_id === userId) return;
      get().addNewPollCount();
    });

    // Подписка на обновление количества голосов
    const cleanupVotes = subscribeToPollVotesCount(({ id, votes_count }) => {
      set((state) => ({
        polls: state.polls.map((p) =>
          p.id === id ? { ...p, votes_count } : p,
        ),
      }));
    });

    return {
      unsubscribeFromNewPolls: async () => {
        isInitialized = false;
        return cleanupNewPolls();
      },
      unsubscribeFromPollVotesCount: () => {
        isInitialized = false;
        cleanupVotes();
      },
    };
  },
}));
