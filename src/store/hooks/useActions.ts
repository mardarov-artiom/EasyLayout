import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageViewActions from '../action-creators/pageViewResize';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(pageViewActions, dispatch);
};
