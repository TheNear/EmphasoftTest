import { UsersActions, UsersActionTypes, UsersInitialState } from "./types";

const initialState: UsersInitialState = {
  data: [],
};

export const usersReducer = (state = initialState, action: UsersActions): UsersInitialState => {
  switch (action.type) {
    case UsersActionTypes.SET_USERS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
