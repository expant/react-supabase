export const POLL_WITH_OPTIONS_SELECT = `
  id,
  question,
  is_anonymous,
  created_at,
  author_id,
  votes_count,
  poll_options(
    id,
    text,
    position
  ),
  author:profiles!polls_author_id_fkey(
    username,
    avatar_updated_at
  )
`;
