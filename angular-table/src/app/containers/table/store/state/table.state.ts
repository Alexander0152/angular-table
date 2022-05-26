import {Item} from "../../../../common/models/table.model";

export interface TableStateModel {
  table: TableState;
}

export interface TableState {
  table: {
    items: Item[] | null,
    totalNumber: number | null;
  };
}
