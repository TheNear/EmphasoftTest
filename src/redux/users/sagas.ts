import { call, ForkEffect, put, takeEvery } from "redux-saga/effects";
import { UsersActionTypes } from "./types";
import { setUsers } from "./actions";
import { endLoading, startLoading } from "../app/action";
import { api } from "../../assets/js/services";

function* fetchUsers() {
  try {
    yield put(startLoading());
    const users = yield call(api.getUsers);
    yield put(setUsers(users));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(endLoading());
  }
}

export function* watchFetchUsers(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(UsersActionTypes.FETCH_USERS, fetchUsers);
}
