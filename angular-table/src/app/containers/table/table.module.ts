import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule } from '@ngrx/store';
// import { AssessmentProgressPresentationComponent } from './components/assessment-progress.presentation.component';
// import { AssessmentProgressSmartComponent } from './components/assessment-progress.smart.component';
// import { AssessmentProgressEffect } from './store/assessment-progress.effect';
// import { assessmentProgressReducer } from './store/state/assessment-progress.reducer';
// import { SharedModule } from '../../common/shared.module';
import {TableSmartComponent} from "./components/table.smart.component";
import {TablePresentationComponent} from "./components/table.presentation.component";

@NgModule({
  declarations: [
    TablePresentationComponent,
    TableSmartComponent,
  ],
  imports: [
    CommonModule,
    // FormsModule,
    // EffectsModule.forFeature([AssessmentProgressEffect]),
    // StoreModule.forFeature('assessmentProgress', assessmentProgressReducer),
    // SharedModule
  ],
  exports: [
    TablePresentationComponent
  ]
})
export class AssessmentProgressModule {
}
