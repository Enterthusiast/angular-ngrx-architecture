import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { routeMap } from './routemap/routemap.const';

import { HomePageComponent } from '../views/pages/home-page/home-page.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: routeMap.home.self, pathMatch: 'full' },
  { path: routeMap.home.self, component: HomePageComponent }
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
