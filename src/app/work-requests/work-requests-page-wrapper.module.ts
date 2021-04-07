import { NgModule } from '@angular/core';
import { WorkRequestsComponent } from "./work-requests.component";
import { FormsModule } from '@angular/forms';
import { WorkRequestsRoutingModule } from "./work-requests-routing.module";
import { SharedMaterialModule } from '../shared-material.module';
import { CommonModule } from '@angular/common';
import { WorkRequestsPageWrapperComponent } from './work-requests-page-wrapper.component';
import { WorkRequestViewComponent } from './work-request-view/work-request-view.component';

@NgModule({
  imports: [
      CommonModule,
      WorkRequestsRoutingModule,
      FormsModule,
      SharedMaterialModule
    ],
  declarations: [WorkRequestsPageWrapperComponent, WorkRequestsComponent, WorkRequestViewComponent],
})
export class WorkRequestsPageWrapperModule { }
