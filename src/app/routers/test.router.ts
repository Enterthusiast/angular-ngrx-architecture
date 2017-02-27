import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { routeMap } from './routemap/routemap.const';

import { TestPageComponent } from '../views/pages/test-page/test-page.component';
import { TestItemComponent } from '../views/components/test/test-item/test-item.component';
import { SubTestItemComponent } from '../views/components/test/sub-test/sub-test-item/sub-test-item.component';

const testRoutes: Routes = [
  { path: routeMap.test.self, component: TestPageComponent, children: [
    { path: '', redirectTo: routeMap.test.item, pathMatch: 'full' },
    { path: routeMap.test.item, component: TestItemComponent },
    { path: routeMap.test.sub, component: SubTestItemComponent }
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
