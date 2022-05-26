import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {getTable, setTable} from "./state/table.action";
import {DataService} from "../../../common/services/data.service";
import {GetItemsModel} from "./model/table.mode";

@Injectable()
export class TableEffect {
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {
  }

  getItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTable.type),
      switchMap(
        (data: GetItemsModel) =>
          this.dataService
            .getItems(data.term, data.offset, data.limit)
            .pipe(
              map((table: any) => {
                  return setTable({items: table.items, totalNumber: table.totalNumber});
                },
                catchError((error: any) =>
                  of(console.log('Error'))
                )
              )
            )
      ))
    );
}
