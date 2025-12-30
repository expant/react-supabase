import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

export function formatTimeAgo(date: string) {
  return formatDistanceToNow(date, {
    addSuffix: true,
    includeSeconds: true,
    locale: ru,
  });
}
