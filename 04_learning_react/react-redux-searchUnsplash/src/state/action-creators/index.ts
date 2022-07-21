import axios from 'axios';
import { Dispatch } from 'react';
import { ActionType } from '../action-type';
import { Action } from '../actions';
import unsplash from '../api/unsplash';

export const searchUnsplash = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_UNSPLASH,
    });
    try {
      const { data } = await unsplash.get('/search/photos', {
        params: {
          query: term,
        },
      });
      const url = data.results.map((result: any) => {
        return result.urls.thumb;
      });
      console.log(url);
      dispatch({
        type: ActionType.SEARCH_UNSPLASH_SUCCESS,
        payload: url,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_UNSPLASH_ERROR,
        payload: err.msg,
      });
    }
  };
};
