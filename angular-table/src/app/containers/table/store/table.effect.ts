import {Inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {getItems, setItems} from "./state/table.action";
import {DataService} from "../../../common/services/data.service";

@Injectable()
export class TableEffect {
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {
  }

  getItems$ = createEffect(() =>
    // @ts-ignore
    this.actions$.pipe(
      ofType(getItems.type),
      switchMap(
        (data: {
          offset: number;
          limit: number;
        }) =>
          this.dataService
            .getItems(data.offset, data.limit)
            .pipe(
              map((items: any) => {
                setItems({items});
                console.log(items);
              }),
              catchError((error: any) =>
                of(alert("Error"))
              )
            )
      )
    )
  );
}
