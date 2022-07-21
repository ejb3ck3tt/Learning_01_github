// import { Data } from "../types/unsplash";

import { Data, Head } from "./unsplash";

export const SET_UNSPLASH = "SET_UNSPLASH";
export interface SetUnsplashAction {
  type: typeof SET_UNSPLASH;
  payload: Data[];
  hasMoreListing: Head[];
}

export const GET_UNSPLASH = "GET_UNSPLASH";
export interface GetUnsplashAction {
  type: typeof GET_UNSPLASH;
  searchText: string;
}

export const GET_UNSPLASH_REQUEST = "GET_UNSPLASH_REQUEST";
export interface GetUnsplashRequestAction {
  type: typeof GET_UNSPLASH_REQUEST;
}

export const GET_UNSPLASH_SUCCESS = "GET_UNSPLASH_SUCCESS";
export interface GetUnsplashSuccessAction {
  type: typeof GET_UNSPLASH_SUCCESS;
  payload: Data[];
}

export const GET_UNSPLASH_FAILURE = "GET_UNSPLASH_FAILURE";
export interface GetUnsplashFailureAction {
  type: typeof GET_UNSPLASH_FAILURE;
  payload: {
    error: string;
  };
}

export type UnsplashAction =
  | SetUnsplashAction
  | GetUnsplashAction
  | GetUnsplashSuccessAction
  | GetUnsplashFailureAction;
