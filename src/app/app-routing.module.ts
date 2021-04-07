import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '', // main app view, public routes go here
    component: AppComponent,
    children: [
      {
        path: '', // ... these routes are used for public
        loadChildren: './public/public.module#PublicModule',
      },
      {
        path: '**', redirectTo: 'dashboard'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
