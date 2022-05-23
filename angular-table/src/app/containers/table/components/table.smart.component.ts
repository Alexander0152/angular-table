import { Component } from '@angular/core';
import {Item} from "../../../common/models/table.model";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {items} from "../store/state/table.selector";
import {TableStateModel} from "../store/state/table.state";
import {getItems} from "../store/state/table.action";

@Component({
  selector: 'app-table-smart',
  template: ` <app-table
    [items]="items$ | async"
    (getItems)="onGetItems($event)"></app-table>`,
})
export class TableSmartComponent {
  items$: Observable<Item[] | null> = this.store.pipe(
    select(items)
  );

  constructor(private store: Store<TableStateModel>) {}

  onGetItems(data: {
    offset: number;
    limit: number;
  }) {
    this.store.dispatch(getItems(data));
  }
}
