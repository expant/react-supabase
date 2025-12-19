import { ERROR_CODES } from "./errorCodes";
import type { ErrorWithCode } from "./types";

const { ALREADY_TAKEN, HAS_WHITESPACE } = ERROR_CODES;

export const handleError = (e: Error): string => {
  const { code } = e as ErrorWithCode;

  if (code === ALREADY_TAKEN) {
    return "Этот username уже занят";
  }

  if (code === HAS_WHITESPACE) {
    return "Username не должен содержать пробелы";
  }

  return "Произошла ошибка при изменении username";
};
