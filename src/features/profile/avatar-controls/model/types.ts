import type { Profile } from "@/entities/profile/model/types";

export type AvatarControlsProps = {
  profile: Profile | null;
  refetchProfile: () => Promise<void>;
};

export type UseAvatarArgs = AvatarControlsProps;
