import { createAction, props } from '@ngrx/store';
import {Item} from "../../../../common/models/table.model";

export const getItems = createAction(
  '[Table] Get items',
  props<{
    offset: number;
    limit: number;
  }>()
);

export const setItems = createAction(
  '[Table] Set items',
  props<{ items: Item[] }>()
);
