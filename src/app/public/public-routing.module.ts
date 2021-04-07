import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

export const publicRoutes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
          //  {
          //      path: 'home',
          //      loadChildren: '../home/home.module#HomeModule',
          //      data: {
          //          search: {
          //              term: 'Home'
          //          },
          //          activeSlug: 'home'
          //      }
          //},
          {
            path: 'dashboard',
            loadChildren: '../dashboard/dashboard.module#DashboardModule',
            data: {
              search: {
                term: 'Dashboard'
              },
              activeSlug: 'dashboard'
            }
          },
          {
            path: 'applications',
            loadChildren: '../applications/applications-page-wrapper.module#ApplicationsPageWrapperModule',
            data: {
              search: {
                term: 'Applications'
              },
              activeSlug: 'applications'
            }
          },
          {
            path: 'projects',
            loadChildren: '../projects/projects-page-wrapper.module#ProjectsPageWrapperModule',
            data: {
              search: {
                term: 'Projects'
              },
              activeSlug: 'projects'
            }
          },
          {
            path: 'work-requests',
            loadChildren: '../work-requests/work-requests-page-wrapper.module#WorkRequestsPageWrapperModule',
            data: {
              search: {
                term: 'WorkRequests'
              },
              activeSlug: 'work-requests'
            }
            },
            {
                path: '**', redirectTo: 'dashboard'
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(publicRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PublicRoutingModule { }
