import { Component } from '@angular/core';
// import { select, Store } from '@ngrx/store';
// import { AssessmentProgressStateModel } from '../store/state/assessment-progress.state';
// import {
//   getAssessments,
//   getBusinessHours,
//   getCachedFrontendParameters, getMetadata,
//   getOrderHistory,
// } from '../store/state/assessment-progress.action';
// import { Observable } from 'rxjs';
// import {
//   assessmentData,
//   businessHours,
//   cachedFrontendParameters, metadata,
//   orderHistory,
// } from '../store/state/assessment-progress.selector';

@Component({
  selector: 'c',
  template: ` <app-table></app-table>`,
})
export class TableSmartComponent {
  // cachedFrontendParameters$: Observable<FrontendParametersModel | null> =
  //   this.store.pipe(select(cachedFrontendParameters));

  constructor() {}
  // constructor(private store: Store<AssessmentProgressStateModel>) {}

  // onGetCachedFrontendParameters() {
  //   this.store.dispatch(getCachedFrontendParameters());
  // }
}
