import { InferValueTypes } from "../../types/redux";
import * as actions from "./actions";

export interface AuthInitialState {
  token: string,
}

export enum AuthActionTypes {
  SIGN_IN = "auth/SIGN_IN",
}

export type AuthActions = ReturnType<InferValueTypes<typeof actions>>;
