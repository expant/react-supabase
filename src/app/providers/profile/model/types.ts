import type { Profile } from "@/entities/profile/model/types";

export type ProfileContextType = {
  profile: Profile | null;
  isLoading: boolean;
  setUsername: (username: string) => void;
  refetchProfile: () => Promise<void>;
};
