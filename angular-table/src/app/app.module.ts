import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AssessmentProgressModule} from "./containers/table/table.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AssessmentProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
