// Setting up exports to combine reducers
import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

//built in helper inside ts to take this function and give us back the type of whatever that function returns assigning it to RootState
export type RootState = ReturnType<typeof reducers>;
