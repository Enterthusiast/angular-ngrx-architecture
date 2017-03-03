import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { TestPageComponent } from '../views/pages/test-page/test-page.component';
import { TestItemComponent } from '../views/components/test/test-item/test-item.component';
import { SubTestItemComponent } from '../views/components/test/sub-test/sub-test-item/sub-test-item.component';

import { RouteMapClass } from '../classes/app/routemap/routemap.app.class';

import { RouterConnectedToStoreModule } from './router-store/router-store.module';

const testRoutes: Routes = [
  { path: RouteMapClass.getLeafLink('test'), component: TestPageComponent, children: [
    { path: '', redirectTo: RouteMapClass.getLeafLink('item'), pathMatch: 'full' },
    { path: RouteMapClass.getLeafLink('item'), component: TestItemComponent },
    { path: RouteMapClass.getLeafLink('sub'), component: SubTestItemComponent }
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
