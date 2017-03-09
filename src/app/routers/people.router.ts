import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PeoplePageComponent } from '../views/pages/people-page/people-page.component';
import { ListDataPeopleComponent } from '../views/components/people/data/list/list.data.people.component';
import { ItemDataPeopleComponent } from '../views/components/people/data/item/item.data.people.component';

import { RouteMapController } from '../controllers/app/route-map/route-map.app.controller';

import { RouterConnectedToStoreModule } from './router-store/router-store.module';

const peopleRoutes: Routes = [
  { path: RouteMapController.getLeafLink('people'), component: PeoplePageComponent, children: [
    { path: '', redirectTo: RouteMapController.getLeafLink('people-list'), pathMatch: 'full' },
    { path: RouteMapController.getLeafLink('people-list'), component: ListDataPeopleComponent },
    { path: RouteMapController.getLeafLink('people-item'), component: ItemDataPeopleComponent },
  ]}
];

@NgModule({
  imports: [
    RouterConnectedToStoreModule.forChild(peopleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PeopleRoutingModule {

}
