import {Injectable} from '@angular/core';
import {Item} from "../models/table.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() {
  }

  getItems(offset: number, limit: number): Observable<Object> {
    const items: Item[] = [{
      id: 1,
      name: "Some name",
      description: "This is some description",
      tags: [
        "Js",
        "Angular",
        "Frontend"
      ]
    }, {
      id: 2,
      name: "Some name",
      description: "This is some description",
      tags: [
        "Js",
        "Angular",
        "Frontend"
      ]
    }, {
      id: 3,
      name: "Some name",
      description: "This is some description",
      tags: [
        "Js",
        "Angular",
        "Frontend"
      ]
    },
    ];
    const observable = of(items);
    return observable;
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(items: Item[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}
