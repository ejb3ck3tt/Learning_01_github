import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import isLoadingReducer from "./isLoadingReducer";

import unsplashReducer from "./unsplashReducer";

const rootReducer = combineReducers({
  unsplash: unsplashReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
