import { AppState, AppStateModel } from './app.state';
import { createSelector } from '@ngrx/store';

export const appSelector = (state: AppStateModel) => state.app;

export const cachedFrontendParameters = createSelector(
  appSelector,
  (state: AppState) => {
    return state.title;
  }
);
