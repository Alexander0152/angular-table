import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {TableSmartComponent} from "./components/table.smart.component";
import {TablePresentationComponent} from "./components/table.presentation.component";
import {EffectsModule} from "@ngrx/effects";
import {TableEffect} from "./store/table.effect";
import {tableReducer} from "./store/state/table.reduser";
import {FormsModule} from "@angular/forms";
import {JwPaginationModule} from "jw-angular-pagination";

@NgModule({
  declarations: [
    TablePresentationComponent,
    TableSmartComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([TableEffect]),
    StoreModule.forFeature('table', tableReducer),
    FormsModule,
    JwPaginationModule
  ],
    exports: [
        TablePresentationComponent,
        TableSmartComponent
    ]
})
export class TableModule {
}
