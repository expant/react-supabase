export const POLL_SELECT = `
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
  author:profiles!polls_author_id_fkey1(
    username,
    avatar_updated_at
  )
`;
