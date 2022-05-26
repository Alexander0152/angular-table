import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {getTable, setTable} from "../containers/table/store/state/table.action";
import {DataService} from "../common/services/data.service";
import {getTitle, setTitle} from "./state/app.action";

@Injectable()
export class AppEffect {
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {
  }

  // getTitle$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getTitle.type),
  //     switchMap(
  //       (data: {
  //         term: string;
  //         offset: number;
  //         limit: number;
  //       }) =>
  //         this.dataService
  //           .getItems(data.term, data.offset, data.limit)
  //           .pipe(
  //             map((table: any) => {
  //                 return setTable({items: table.items, totalNumber: table.totalNumber});
  //               },
  //             catchError((error: any) =>
  //               of(alert("Error"))
  //             )
  //           )
  //     ))
  //   )
  // );
}
