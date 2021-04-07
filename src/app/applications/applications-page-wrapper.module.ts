import { NgModule } from '@angular/core';
import { ApplicationsComponent } from "./applications.component";
import { FormsModule } from '@angular/forms';
import { ApplicationsRoutingModule } from "./applications-routing.module";
import { SharedMaterialModule } from '../shared-material.module';
import { CommonModule } from '@angular/common';
import { ApplicationsPageWrapperComponent } from './applications-page-wrapper.component';
import { ApplicationViewComponent } from './application-view/application-view.component';

@NgModule({
  imports: [
      CommonModule,
      ApplicationsRoutingModule,
      FormsModule,
      SharedMaterialModule
    ],
  declarations: [ApplicationsPageWrapperComponent, ApplicationsComponent, ApplicationViewComponent],
  exports: [ApplicationsComponent]
})
export class ApplicationsPageWrapperModule { }
