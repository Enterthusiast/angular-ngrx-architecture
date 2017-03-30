/**
 *
 * This module is part of the router-store logic, check the router-store.module.ts file for more info
 *
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WelcomeRootComponent} from '../views/welcome.root.component';
import {RouteMapController} from '../../../transverses/routes/route-map.app.controller';


const appRoutes: Routes = [
  { path: '',   redirectTo: RouteMapController.getLeafLink('home'), pathMatch: 'full' },
  { path: RouteMapController.getLeafLink('home'), component: WelcomeRootComponent },
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
export class RootRoutingModule {}
