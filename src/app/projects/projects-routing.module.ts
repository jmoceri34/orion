import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectsPageWrapperComponent } from './projects-page-wrapper.component';
import { ProjectViewComponent } from './project-view/project-view.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPageWrapperComponent,
    children: [
      {
        path: '',
        component: ProjectsComponent
      },
      {
        path: ':id/view',
        component: ProjectViewComponent
      }
    ]
  }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProjectsRoutingModule { }
