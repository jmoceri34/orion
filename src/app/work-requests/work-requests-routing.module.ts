import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkRequestsComponent } from './work-requests.component';
import { WorkRequestsPageWrapperComponent } from './work-requests-page-wrapper.component';
import { WorkRequestViewComponent } from './work-request-view/work-request-view.component';

const routes: Routes = [
    {
      path: '',
      component: WorkRequestsPageWrapperComponent,
      children: [
        {
          path: '',
          component: WorkRequestsComponent
        },
        {
          path: ':id/view',
          component: WorkRequestViewComponent
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
export class WorkRequestsRoutingModule { }
