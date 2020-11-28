import { IUsersResponse } from "../../types/api";

export const getFormatedDate = (date: string): string => {
  const dateObj = new Date(date);
  const option: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const dateStr = dateObj.toLocaleDateString("ru-RU", option);
  return `${dateStr}`;
};
