import * as actions from "../types/actionTypes";

import { Data } from "../types/unsplash";

export type UnsplashState = {
  data: Data[];
  hasMoreListing?: boolean;
};

const initialState: UnsplashState = {
  data: [],
  hasMoreListing: false,
};

const unsplashReducer = (
  state: UnsplashState = initialState,
  action: actions.UnsplashAction
): UnsplashState => {
  switch (action.type) {
    case actions.SET_UNSPLASH:
    case actions.GET_UNSPLASH_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default unsplashReducer;
