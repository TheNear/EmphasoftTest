import { combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { usersReducer } from "./users/reducer";
import { usersFilterReducer } from "./usersFilter/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  filter: usersFilterReducer,
});

export { rootReducer };
