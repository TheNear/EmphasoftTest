import { IUsersResponse } from "../../types/api";

import { InferValueTypes } from "../../types/redux";
import * as actions from "./actions";

export enum UsersActionTypes {
  FETCH_USERS = "users/FETCH_USERS",
  SET_USERS = "users/SET_USERS",
}

export interface UsersInitialState {
  readonly data: IUsersResponse[],
}

export type UsersActions = ReturnType<InferValueTypes<typeof actions>>;
