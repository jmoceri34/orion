import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsPageWrapperComponent } from './applications-page-wrapper.component';
import { ApplicationViewComponent } from './application-view/application-view.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationsPageWrapperComponent,
    children: [
      {
        path: '',
        component: ApplicationsComponent
      },
      {
        path: ':id/view',
        component: ApplicationViewComponent
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
export class ApplicationsRoutingModule { }
