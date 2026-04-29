import type { Profile } from "@/entities/profile/model/types";

export type UpdateUsernameFormProps = {
  profile: Profile | null;
  setUsername: (username: string) => void;
};

export type ErrorWithCode = { code?: string };
