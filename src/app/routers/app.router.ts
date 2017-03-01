import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomePageComponent } from '../views/pages/home-page/home-page.component';

import { RouteMapClass } from '../classes/app/routemap/routemap.app.class';

const appRoutes: Routes = [
  { path: '',   redirectTo: RouteMapClass.getLeafLink('home'), pathMatch: 'full' },
  { path: RouteMapClass.getLeafLink('home'), component: HomePageComponent }
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
