import { isToday } from "date-fns";

export function formatToday(value: Date) {
  return isToday(value) ? 'today' : 'not today';
}