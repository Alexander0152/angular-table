import {Injectable} from '@angular/core';
import {Item} from "../models/table.model";
import {Observable, of} from "rxjs";
import data from "../../data.json";

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() {
  }

  getItems(term: string, offset: number, limit: number): Observable<Object> {
    const itemsList: any = data.items;

    const totalNumber = itemsList.length;
    const startRange = offset != 1 ? (offset - 1) * limit : 0;
    const endRange = offset * limit > totalNumber ? totalNumber : offset * limit;

    const filtered = itemsList.filter((item: Item) => item.name.toLowerCase().includes(term.toLowerCase()));

    const result = filtered.slice(startRange, endRange);

    const observable = of({items: result, totalNumber: filtered.length});
    return observable;
  }

}
