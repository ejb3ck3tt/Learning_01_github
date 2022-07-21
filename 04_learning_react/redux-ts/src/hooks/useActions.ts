import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  //allows to dispatch actions
  const dispatch = useDispatch();
  //first arg is object, 2nd arg dispatch func
  return bindActionCreators(actionCreators, dispatch);
  // sample of what it returns:
  //{searchRepositories: dispatch(searchRepositories)}
};
