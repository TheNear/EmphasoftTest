import { all, AllEffect, ForkEffect } from "redux-saga/effects";
import { watchFetchUsers } from "./users/sagas";

export function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
  > {
  yield all([watchFetchUsers()]);
}
