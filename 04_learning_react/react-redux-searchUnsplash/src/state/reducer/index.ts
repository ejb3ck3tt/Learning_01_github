import { combineReducers } from 'redux';
import unsplashReducer from './unsplashReducer';

const reducers = combineReducers({
  repositories: unsplashReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
