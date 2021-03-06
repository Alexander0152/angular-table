import { createSelector } from '@ngrx/store';
import {
  TableState,
  TableStateModel,
} from './table.state';

export const tableSelector = (
  state: TableStateModel
) => state.table;

export const items = createSelector(
  tableSelector,
  (state: TableState) => {
    return state.table.items;
  }
);

export const totalNumber = createSelector(
  tableSelector,
  (state: TableState) => {
    return state.table.totalNumber;
  }
);

