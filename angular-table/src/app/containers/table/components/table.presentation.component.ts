import {
  AfterViewInit,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
// @ts-ignore
import paginate from "jw-paginate";
import {Item} from "../../../common/models/table.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  styleUrls: ['./table.scss'],
})
export class TablePresentationComponent
  implements OnInit {
  ngOnInit() {
    this.handleGetItems({offset: 1, limit: 10});
  }

  @Input()
  set items(data: Item[] | null) {
    if (!data) return;

    this._items = data;
  }

  @Output()
  getItems: EventEmitter<any> = new EventEmitter();

  _items: Item[] | any;

  constructor() {
  }

  handleGetItems(data: {
    offset: number;
    limit: number;
  }) {
    // this.getItems.emit(data);
  }
}
