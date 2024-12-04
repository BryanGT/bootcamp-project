import { formatISO } from "date-fns";

export function formatDate(value: Date) {
  return formatISO(value);
}