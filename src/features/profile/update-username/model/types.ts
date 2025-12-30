import type { Profile } from "@/entities/profile/model/types";

export type UpdateUsernameFormValues = { username: string };

export type UpdateUsernameFormProps = {
  profile: Profile | null;
  setUsername: (username: string) => void;
};

export type UseUpdateUsernameFormArgs = UpdateUsernameFormProps;

export type ErrorWithCode = { code?: string };
