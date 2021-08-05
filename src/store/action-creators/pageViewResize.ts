import { Dispatch } from 'redux';
import { viewActions, viewResizeAction } from '../../types/pageView';

export const resizeView = () => {
  return async (dispatch: Dispatch<viewResizeAction>) => {
    dispatch({ type: viewActions.PAGE_VIEW_RESIZE_START });
    dispatch({
      type: viewActions.PAGE_VIEW_RESIZE,
      payload: {
        pageInput: 20,
        mainView: 60,
        pageOutput: 20,
        loading: false,
      },
    });
  };
};
