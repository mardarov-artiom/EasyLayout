import { combineReducers } from 'redux';
import { pageViewReducer } from './pageViewReducer';

export const rootReducer = combineReducers({
  pageView: pageViewReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
