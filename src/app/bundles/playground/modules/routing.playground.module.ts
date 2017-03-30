import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PagePlaygroundComponent} from '../views/page.playground.component';
import {TitlePlaygroundComponent} from '../views/title.playground.component';
import {ClickPlaygroundComponent} from '../views/click.playground.component';

import {RouteMapController} from '../../../transverses/routes/route-map.app.controller';

const testRoutes: Routes = [
  { path: RouteMapController.getLeafLink('test'), component: PagePlaygroundComponent, children: [
    { path: '', redirectTo: RouteMapController.getLeafLink('item'), pathMatch: 'full' },
    { path: RouteMapController.getLeafLink('item'), component: TitlePlaygroundComponent },
    { path: RouteMapController.getLeafLink('sub'), component: ClickPlaygroundComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(testRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingPlaygroundModule {}
