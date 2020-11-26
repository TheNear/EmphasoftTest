import { AuthActionTypes } from "./types";

// FIXME: Пока только затычки
export const SignIn = () => ({
  type: AuthActionTypes.SIGN_IN,
} as const);
