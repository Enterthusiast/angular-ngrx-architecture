import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { routemapLinks } from './config/routemap-links.const';

import { HomePageComponent } from '../views/pages/home-page/home-page.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: routemapLinks.home.self, pathMatch: 'full' },
  { path: routemapLinks.home.self, component: HomePageComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
