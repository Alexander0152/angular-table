import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TableModule} from "./containers/table/table.module";
import {EffectsModule} from '@ngrx/effects';
import {AppEffect} from './store/app.effect';
import {StoreModule} from "@ngrx/store";
import {appReducer} from "./store/state/app.reducer";

export function $state($injector: Injector) {
  return $injector.get('$state');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    EffectsModule.forRoot([AppEffect]),
    StoreModule.forRoot({app: appReducer}),
  ],
  providers: [{provide: '$state', deps: ['$injector'], useFactory: $state},],
  bootstrap: [AppComponent]
})
export class AppModule {
}
