/**
 *
 * This module is part of the router-store logic, check the router-store.module.ts file for more info
 *
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomePageComponent} from '../views/home-page.component';
import {RouteMapController} from '../route/route-map/route-map.app.controller';


const appRoutes: Routes = [
  { path: '',   redirectTo: RouteMapController.getLeafLink('home'), pathMatch: 'full' },
  { path: RouteMapController.getLeafLink('home'), component: HomePageComponent },
  { path: '**', redirectTo: RouteMapController.getLeafLink('home') }
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
