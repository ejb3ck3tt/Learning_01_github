import { ActionType } from '../action-type';

interface SearchUnsplashAction {
  type: ActionType.SEARCH_UNSPLASH;
}

interface SearchUnsplashSuccessAction {
  type: ActionType.SEARCH_UNSPLASH_SUCCESS;
  payload: string[];
}

interface SearchUnsplashErrorAction {
  type: ActionType.SEARCH_UNSPLASH_ERROR;
  payload: string;
}

export type Action =
  | SearchUnsplashAction
  | SearchUnsplashSuccessAction
  | SearchUnsplashErrorAction;
