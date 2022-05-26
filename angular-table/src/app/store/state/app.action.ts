import { createAction, props } from '@ngrx/store';

export const getTitle = createAction(
  '[App] Get title'
);

export const setTitle = createAction(
  '[App] Set title',
  props<{ title: string }>()
);
