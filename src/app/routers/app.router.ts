/**
 *
 * This module is part of the router-store logic, check the router-store.module.ts file for more info
 *
 */

import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomePageComponent } from '../views/pages/home-page/home-page.component';

import { RouteMapClass } from '../classes/app/routemap/routemap.app.class';

import { RouterConnectedToStoreModule } from './router-store/router-store.module';

const appRoutes: Routes = [
  { path: '',   redirectTo: RouteMapClass.getLeafLink('home'), pathMatch: 'full' },
  { path: RouteMapClass.getLeafLink('home'), component: HomePageComponent },
  { path: '**', redirectTo: RouteMapClass.getLeafLink('home') }
];

@NgModule({
  imports: [
    // Here we are using the router-store logic
    RouterConnectedToStoreModule.forRoot(appRoutes)
    // Fallback to standard logic if anything goes wrong
    // RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
