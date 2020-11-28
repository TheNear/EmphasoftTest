import { IUsersResponse } from "../../types/api";
import { UsersActionTypes } from "./types";

export const setUsers = (data: IUsersResponse[]) => ({
  type: UsersActionTypes.SET_USERS,
  payload: data,
} as const);

export const fetchUsers = () => ({
  type: UsersActionTypes.FETCH_USERS,
} as const);
