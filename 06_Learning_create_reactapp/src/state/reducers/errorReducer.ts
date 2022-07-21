interface ErrorAction {
  type: string;
  error: Error | string;
}

export interface ErrorState {
  [key: string]: null | Error | string;
}
const getErrorMatches = (actionType: string) =>
  /(.*)_(REQUEST|FAILURE|CLEAR_ERRORS)/.exec(actionType);

const errorReducer = (state: ErrorState = {}, action: ErrorAction) => {
  const matches = getErrorMatches(action.type);

  if (!matches) {
    return state;
  }
  const [, requestTerm, requestStatus] = matches;
  return {
    ...state,
    [requestTerm]: requestStatus === "FAILURE" ? action.error : null,
  };
};

export default errorReducer;
