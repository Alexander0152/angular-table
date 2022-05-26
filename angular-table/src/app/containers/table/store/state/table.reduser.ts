import {createReducer, on} from '@ngrx/store';
import {setTable} from "./table.action";
import {TableState} from "./table.state";

export const initialState: Readonly<TableState> = {
  table: {
    items: null,
    totalNumber: null
  }
};

const _tableReducer = createReducer(
  initialState,
  on(setTable, (state, { items, totalNumber } ) => {
    return {
      ...state,
      table: {items: items, totalNumber: totalNumber}
    };
  })
);

export function tableReducer(state: any, action: any) {
  return _tableReducer(state, action);
}
