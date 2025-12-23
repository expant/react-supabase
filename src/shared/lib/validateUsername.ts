const getLengthRangeError = (range: number): string =>
  range < 3 || range > 20
    ? "Username должен быть не менее 3 символов и не более 20"
    : "";

export function validateUsernameUpdate(
  newUsername: string,
  current: string
): string {
  if (newUsername === current) return "Вы уже используете этот username";

  const length = newUsername.length;

  if (length === 0) return "Username не может быть пустым";

  return getLengthRangeError(length);
}

export function validateUsernameCreate(username: string): string {
  const length = username.length;

  if (length === 0) return "";
  return getLengthRangeError(length);
}
