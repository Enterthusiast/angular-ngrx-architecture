import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { TestPageComponent } from '../views/pages/test-page/test-page.component';
import { TestItemComponent } from '../views/components/test/test-item/test-item.component';
import { SubTestItemComponent } from '../views/components/test/sub-test/sub-test-item/sub-test-item.component';

import { RouteMapController } from '../controllers/app/route-map/route-map.app.controller';

import { RouterConnectedToStoreModule } from './router-store/router-store.module';

const testRoutes: Routes = [
  { path: RouteMapController.getLeafLink('test'), component: TestPageComponent, children: [
    { path: '', redirectTo: RouteMapController.getLeafLink('item'), pathMatch: 'full' },
    { path: RouteMapController.getLeafLink('item'), component: TestItemComponent },
    { path: RouteMapController.getLeafLink('sub'), component: SubTestItemComponent }
  ]}
];

@NgModule({
  imports: [
    RouterConnectedToStoreModule.forChild(testRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TestRoutingModule {}
