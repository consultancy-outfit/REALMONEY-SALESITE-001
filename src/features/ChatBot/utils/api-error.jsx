import { LOCAL_STORAGE_KEYS } from "../constants/ui";

export class ApiError extends Error {
  constructor(errors = [], message = "Something went wrong", stack = "") {
    super(message);
    this.message = message;
    this.data = null;
    this.isError = true;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export const getDataFromLocalStorage = (
  key = LOCAL_STORAGE_KEYS?.AUTH_DATA,
) => {
  if (typeof window === "undefined") return null;

  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const setDataToLocalStorage = (
  key = LOCAL_STORAGE_KEYS?.AUTH_DATA,
  data,
) => localStorage.setItem(key, data);

export const removeDataFromLocalStorage = (
  key = LOCAL_STORAGE_KEYS?.AUTH_DATA,
) => localStorage.removeItem(key);

export const fullName = (firstName, lastName) => {
  if (!!!firstName && !!!lastName) return "None";
  return `${firstName ?? ""} ${lastName ?? ""}`;
};

export const fullNameInitial = (firstName, lastName) => {
  if (!!!firstName && !!!lastName) return "-";
  return `${firstName?.[0] ?? ""}${lastName?.[0] ?? ""}`;
};

export const camelCaseToTitleCase = (str) =>
  str
    ?.replace(/([A-Z])/g, " $1")
    ?.replace(/^./, (match) => match?.toUpperCase())
    ?.trim();
