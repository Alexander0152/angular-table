import { createAction, props } from '@ngrx/store';
import {Item} from "../../../../common/models/table.model";

export const getTable = createAction(
  '[Table] Get items',
  props<{
    term: string,
    offset: number;
    limit: number;
  }>()
);

export const setTable = createAction(
  '[Table] Set items',
  props<{ items: Item[] , totalNumber: number}>()
);
