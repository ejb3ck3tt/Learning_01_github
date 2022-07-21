import { ActionType } from '../action-type';
import { Action } from '../actions';

interface UnsplashState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const unsplashReducer = (
  state: UnsplashState = initialState,
  action: Action
): UnsplashState => {
  switch (action.type) {
    case ActionType.SEARCH_UNSPLASH:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_UNSPLASH_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_UNSPLASH_ERROR:
      return { loading: false, error: null, data: [] };
    default:
      return state;
  }
};

export default unsplashReducer;
