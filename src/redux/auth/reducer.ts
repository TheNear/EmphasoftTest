import { AuthActions, AuthInitialState } from "./types";

const initialState: AuthInitialState = {
  token: "",
};

export const authReducer = (state = initialState, action: AuthActions): AuthInitialState => {
  switch (action.type) {
    default:
      return state;
  }
};
