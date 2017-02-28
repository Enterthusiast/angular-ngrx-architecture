import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { routemapLinks } from './config/routemap-links.const';

import { TestPageComponent } from '../views/pages/test-page/test-page.component';
import { TestItemComponent } from '../views/components/test/test-item/test-item.component';
import { SubTestItemComponent } from '../views/components/test/sub-test/sub-test-item/sub-test-item.component';

const testRoutes: Routes = [
  { path: routemapLinks.test.self, component: TestPageComponent, children: [
    { path: '', redirectTo: routemapLinks.test.item, pathMatch: 'full' },
    { path: routemapLinks.test.item, component: TestItemComponent },
    { path: routemapLinks.test.sub, component: SubTestItemComponent }
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
