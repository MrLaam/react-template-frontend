import { call, put, takeEvery } from "redux-saga/effects";
import { LOAD_POSTS, STORE_POSTS } from "../actions";
import Api from "../services/api";

const api = Api.getInstance();

export function* fetchPosts() {
  const response = yield call(api.retrievePostsRequest);
  yield put({ type: STORE_POSTS, posts: response });
}

export default function* postsSaga() {
  yield takeEvery(LOAD_POSTS, fetchPosts);
}
