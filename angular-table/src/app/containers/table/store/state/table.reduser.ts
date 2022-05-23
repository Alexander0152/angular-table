import { createReducer, on } from '@ngrx/store';
import {setItems} from "./table.action";
import {TableState} from "./table.state";

export const initialState: Readonly<TableState> = {
  items: null,
};

const _tableReducer = createReducer(
  initialState,
  on(setItems, (state, { items }) => {
    return {
      ...state,
      items: items,
    };
  })
);

export function tableReducer(state: any, action: any) {
  return _tableReducer(state, action);
}
