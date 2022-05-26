import { Component } from '@angular/core';
import {Item} from "../../../common/models/table.model";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {items, totalNumber} from "../store/state/table.selector";
import {TableStateModel} from "../store/state/table.state";
import {getTable} from "../store/state/table.action";
import {GetItemsModel} from "../store/model/table.mode";

@Component({
  selector: 'app-table-smart',
  template: ` <app-table
    [items]="items$ | async"
    [totalNumber]="totalNumber$ | async"
    (getItems)="onGetItems($event)"></app-table>`,
})
export class TableSmartComponent {
  items$: Observable<Item[] | null> = this.store.pipe(
    select(items)
  );

  totalNumber$: Observable<number | null> = this.store.pipe(
    select(totalNumber)
  );

  constructor(private store: Store<TableStateModel>) {}

  onGetItems(data: GetItemsModel) {
    this.store.dispatch(getTable(data));
  }
}
