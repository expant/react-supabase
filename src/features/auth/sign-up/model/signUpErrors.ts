export function getErrorMessage(e: Error): string {
  if (e.message === "Unable to validate email address: invalid format") {
    return "Неверный формат почты";
  } else {
    return "Произошла ошибка при регистрации";
  }
}
