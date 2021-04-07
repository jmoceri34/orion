import { NgModule } from '@angular/core';
import { DashboardComponent } from "./dashboard.component";
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { SharedMaterialModule } from '../shared-material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
      CommonModule,
      DashboardRoutingModule,
      FormsModule,
      SharedMaterialModule
    ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
