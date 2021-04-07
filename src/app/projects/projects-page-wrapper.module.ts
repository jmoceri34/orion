import { NgModule } from '@angular/core';
import { ProjectsComponent } from "./projects.component";
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from "./projects-routing.module";
import { SharedMaterialModule } from '../shared-material.module';
import { CommonModule } from '@angular/common';
import { ProjectsPageWrapperComponent } from './projects-page-wrapper.component';
import { ProjectViewComponent } from './project-view/project-view.component';

@NgModule({
  imports: [
      CommonModule,
      ProjectsRoutingModule,
      FormsModule,
      SharedMaterialModule
  ],
  declarations: [ProjectsPageWrapperComponent, ProjectsComponent, ProjectViewComponent],
})
export class ProjectsPageWrapperModule { }
