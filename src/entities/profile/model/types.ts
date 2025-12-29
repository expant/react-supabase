export type Author = {
  username: string;
  avatar_updated_at: string | null;
};

export type Profile = Author & {
  id: string;
};
