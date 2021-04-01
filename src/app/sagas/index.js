import { fork } from "@redux-saga/core/effects";
import postsSaga from "./postsSaga";

export default function* rootSaga() {
  yield fork(postsSaga);
}