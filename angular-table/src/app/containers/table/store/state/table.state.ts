import {Item} from "../../../../common/models/table.model";

export interface TableStateModel {
  table: TableState;
}

export interface TableState {
  items: Item[] | null;
}
