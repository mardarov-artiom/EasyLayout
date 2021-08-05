export enum viewActions {
  PAGE_VIEW_RESIZE_START = 'PAGE_VIEW_RESIZE_START',
  PAGE_VIEW_RESIZE = 'PAGE_VIEW_RESIZE',
}

export interface pageViewStore {
  pageInput: number;
  mainView: number;
  pageOutput: number;
  loading: boolean;
}

interface pageViewResize {
  type: viewActions.PAGE_VIEW_RESIZE;
  payload: {
    pageInput: number;
    mainView: number;
    pageOutput: number;
    loading: boolean;
  };
}

interface pageViewResizeStart {
  type: viewActions.PAGE_VIEW_RESIZE_START;
  payload?: any;
}

export type viewResizeAction = pageViewResize | pageViewResizeStart;
