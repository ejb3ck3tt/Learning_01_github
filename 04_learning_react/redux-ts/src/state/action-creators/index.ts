import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

//creating redux thunk
export const searchRepositories = (term: string) => {
  //dispatch - is how to manually dispatch actions directly into the redux store
  //Action is the action put together, will get a function that matches the type of Action
  return async (dispatch: Dispatch<Action>) => {
    //immediately dispatch an action
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });
    //use axios to send a request to npm api
    try {
      //get the data from axios
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          //2nd argument for what is actually being searched
          params: {
            text: term,
          },
        }
      );
      //map the object and store it in a variable
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      //then dispatch an action
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
      //if something goes wrong
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
