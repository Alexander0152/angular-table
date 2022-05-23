import {createReducer, on} from '@ngrx/store';
import {AppState} from './app.state';
import {setTitle} from './app.action';

export const initialState: Readonly<AppState> = {
  title: null,
};

const _appReducer = createReducer(
  initialState,
  on(setTitle, (state, {title}) => {
    return {
      ...state,
      title: {title},
    };
  })
);

export function appReducer(state: any, action: any) {
  return _appReducer(state, action);
}
