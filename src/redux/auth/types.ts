import { InferValueTypes } from "../../types/redux";
import * as actions from "./actions";

export interface IAuthUser {
  name: string,
}

export interface AuthInitialState {
  token: string,
  user: IAuthUser | null,
}

export enum AuthActionTypes {
  SIGN_IN = "auth/SIGN_IN",
}

export type AuthActions = ReturnType<InferValueTypes<typeof actions>>;
