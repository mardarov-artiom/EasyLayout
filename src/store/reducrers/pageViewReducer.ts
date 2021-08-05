import { viewActions, pageViewStore, viewResizeAction } from '../../types/pageView';

const initialState: pageViewStore = {
  pageInput: 0,
  mainView: 0,
  pageOutput: 0,
  loading: false,
};

export const pageViewReducer = (state = initialState, action: viewResizeAction): pageViewStore => {
  switch (action.type) {
    case viewActions.PAGE_VIEW_RESIZE_START:
      return { ...state, loading: true };
    case viewActions.PAGE_VIEW_RESIZE:
      return action.payload;
    default:
      return state;
  }
};
