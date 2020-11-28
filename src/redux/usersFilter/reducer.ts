import { UsersFilterState, UsersFilterActions, UsersFilterActionType } from "./types";

const initialState: UsersFilterState = {
  name: "",
};

export const usersFilterReducer = (
  state = initialState,
  action: UsersFilterActions,
): UsersFilterState => {
  switch (action.type) {
    case UsersFilterActionType.CHANGE_VALUE:
      return action.payload;
    case UsersFilterActionType.RESET_VALUE:
      // FIXME: Не пробовал
      return initialState;
    default:
      return state;
  }
};
