import * as actions from "../types/actionTypes";
// import { Data } from "../types/unsplash";

export function setUnsplash(
  data: [],
  hasMoreListing: []
): actions.SetUnsplashAction {
  return {
    type: actions.SET_UNSPLASH,
    payload: data,
    hasMoreListing,
  };
}

export function getUnsplash(searchText: string): actions.GetUnsplashAction {
  return {
    type: actions.GET_UNSPLASH,
    searchText,
  };
}

export function getUnsplashRequest(): actions.GetUnsplashRequestAction {
  return {
    type: actions.GET_UNSPLASH_REQUEST,
  };
}

export function getUnsplashSuccess(data: []): actions.GetUnsplashSuccessAction {
  return {
    type: actions.GET_UNSPLASH_SUCCESS,
    payload: data,
  };
}

export function getUnsplashError(
  error: string
): actions.GetUnsplashFailureAction {
  return {
    type: actions.GET_UNSPLASH_FAILURE,
    payload: {
      error,
    },
  };
}
