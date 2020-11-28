import { ForkEffect, put, takeEvery } from "redux-saga/effects";
import { UsersActionTypes } from "./types";
// FIXME: заглушка
import userData from "../../mock/users.json";
import { setUsers } from "./actions";

function* fetchUsers() {
  try {
    const users = yield userData;
    yield put(setUsers(users));
  } catch {
    console.log("FETCH ERROR GENERATOR");
  }
}

export function* watchFetchUsers(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(UsersActionTypes.FETCH_USERS, fetchUsers);
}
