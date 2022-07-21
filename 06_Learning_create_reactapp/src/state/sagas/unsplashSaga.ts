import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { fetchUnsplash } from "../service";
import * as actionCreators from "../action-creators";
import * as actionTypes from "../types/actionTypes";

function* onLoadUnsplash({ searchText }: actionTypes.GetUnsplashAction) {
  try {
    yield put(actionCreators.getUnsplashRequest());
    const { data } = yield call(fetchUnsplash, searchText);
    yield put(actionCreators.getUnsplashSuccess(data.results));
  } catch (error: any) {
    yield put(actionCreators.getUnsplashError(error));
  }
}

function* watchOnLoadUnsplash() {
  yield takeEvery(actionTypes.GET_UNSPLASH, onLoadUnsplash);
}

export default function* UnsplashSaga() {
  yield all([fork(watchOnLoadUnsplash)]);
}
