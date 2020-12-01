import { call, ForkEffect, put, takeEvery } from "redux-saga/effects";
import { UsersActionTypes } from "./types";
import { setUsers } from "./actions";
import { endLoading, pushMessage, startLoading } from "../app/action";
import { api } from "../../assets/js/services";
import { getErrorMessage } from "../../assets/js/helpers";

function* fetchUsers() {
  try {
    yield put(startLoading());
    const users = yield call(api.getUsers);
    yield put(setUsers(users));
  } catch (error) {
    yield put(pushMessage(getErrorMessage(error.message)));
  } finally {
    yield put(endLoading());
  }
}

export function* watchFetchUsers(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(UsersActionTypes.FETCH_USERS, fetchUsers);
}
