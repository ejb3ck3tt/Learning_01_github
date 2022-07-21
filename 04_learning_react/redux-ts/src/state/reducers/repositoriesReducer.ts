import { ActionType } from '../action-types';
import { Action } from '../actions';

//The reducers is going to receive the arguments of states or whatever the state was the last time this reducer ran and an action that we need to process. And then we need to return some kind of state that has these three properties. (data, loading, error)

//define the interface
interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

//initiate state argument for the first time the reducer runs
const initialState = {
  loading: false,
  error: null,
  data: [],
};

//switch also acts as typeguard
const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;

//JUST SOME NOTES

//define what the action actually is instead of using any
// in TS, every action is always going to be an object that have a type property and optionally it can also have a payload. sample:
// interface Action {
//   type: string;
//the question mark means it may or may not have a payload property
//   payload?: any;
// }

// Type guards -sample
// if true, then it is 100% searchRepositoriesSuccess, must be an object satisfying the above interface
// if (action.type === "search_repositories_success") {
//   // 100% satisfy the action
//   action.payload;
// }

// JS structure, This structure allows you to change to any type which may cause error.
// apply the interface
// const reducer = (state: RepositoriesState, action: any) => {
//   //use switch statements (Action types)
//   switch (action.type) {
//     case "search_repositories":
//       //new request, set to true
//       return { loading: true, error: null, data: [] };
//     case "search_repositories_success":
//       //no longer loading, no error occurred, action payload
//       return { loading: false, error: null, data: action.payload };
//     case "search_repositories_error":
//       //no longer loading, action payload that container error msg, reset data property
//       return { loading: false, error: action.payload, data: [] };
//     default:
//       return state;
//   }
// };
