import { PossibleSortTypes, UsersActions, UsersActionTypes, UsersInitialState } from "./types";

const initialState: UsersInitialState = {
  data: [],
  sortDirectionToLow: true,
  sortType: PossibleSortTypes.NOT_SORTED,
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
