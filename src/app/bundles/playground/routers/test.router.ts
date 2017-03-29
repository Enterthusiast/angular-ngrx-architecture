import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TestPageComponent} from '../views/test-page.component';
import {TestItemComponent} from '../views/test-item.component';
import {SubTestItemComponent} from '../views/sub-test-item.component';

import {RouteMapController} from '../../../transverses/routes/route-map.app.controller';

const testRoutes: Routes = [
  { path: RouteMapController.getLeafLink('test'), component: TestPageComponent, children: [
    { path: '', redirectTo: RouteMapController.getLeafLink('item'), pathMatch: 'full' },
    { path: RouteMapController.getLeafLink('item'), component: TestItemComponent },
    { path: RouteMapController.getLeafLink('sub'), component: SubTestItemComponent }
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
export class TestRoutingModule {}
