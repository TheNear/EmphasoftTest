import { IAuthPost, IAuthResponse } from "../../types/api";
import { AUTH_URL, BASE_URL } from "./constants";

const postDefaultOption = <T>(data: T): RequestInit =>
  ({
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
  } as RequestInit);

export const get = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw response.statusText;
  }
  const result = await response.json();
  return result;
};

export const post = async <T, S>(url: string, data: S): Promise<T> => {
  const response = await fetch(url, postDefaultOption<S>(data));
  if (!response.ok) {
    throw response.statusText;
  }
  const result = await response.json();
  return result;
};

export const authRequest = async (data: IAuthPost): Promise<IAuthResponse> => {
  const result = await post<IAuthResponse, IAuthPost>(BASE_URL + AUTH_URL, data);
  return result;
};
