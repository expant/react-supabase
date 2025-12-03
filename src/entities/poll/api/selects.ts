export const POLL_WITH_OPTIONS_SELECT = `
  id,
  question,
  is_anonymous,
  created_at,
  author_id,
  poll_options(
    id,
    text,
    position
  )
`;
