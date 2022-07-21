import { all, fork } from "redux-saga/effects";
import UnsplashSaga from "./unsplashSaga";

export default function* rootSaga() {
  yield all([fork(UnsplashSaga)]);
}
