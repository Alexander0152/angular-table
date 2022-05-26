import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output, SimpleChanges,
} from '@angular/core';
import paginate from "jw-paginate";
import {Item} from "../../../common/models/table.model";
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";
import {GetItemsModel} from "../store/model/table.mode";

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  styleUrls: ['./table.scss'],
})
export class TablePresentationComponent
  implements OnInit {

  @Input()
  set items(data: Item[] | null) {
    if (!data) return;

    this._items = data;
  }

  @Input()
  set totalNumber(data: number | null) {
    if (!data) return;

    this._totalNumber = data;
  }

  @Output()
  getItems: EventEmitter<any> = new EventEmitter();

  _items: Item[] | any;
  _totalNumber: number | any = 0;

  offset: number = 1;
  limit: number = 5;

  term = new Subject<GetItemsModel>();
  term$ = this.term.asObservable();

  pager: any = {};

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.pager.currentPage);
    }
  }

  ngOnInit(): void {
    if (this._items && this._items.length) {
      this.setPage(1);
    }
  }

  search(term: string, offset?: number,): void {
    offset ? this.offset = offset as number : this.offset = 1;

    if (term.length >= 3) {
      this.term.next({term: term, offset: this.offset, limit: this.limit});
    }
  }

  subscription = this.term$.pipe(debounceTime(300), distinctUntilChanged())
    .subscribe((data: GetItemsModel) => {
      this.getItems.emit(data);
    });

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  setPage(page: number) {
    this.pager = paginate(this._totalNumber, page, this.limit, 3);
  }

}
