import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PeoplePageComponent } from '../views/pages/people-page/people-page.component';
import { ListDataPeopleComponent } from '../views/components/people/data/list/list.data.people.component';
import { ItemDataPeopleComponent } from '../views/components/people/data/item/item.data.people.component';

import { RouteMapClass } from '../classes/app/routemap/routemap.app.class';

import { RouterConnectedToStoreModule } from './router-store/router-store.module';

const peopleRoutes: Routes = [
  { path: RouteMapClass.getLeafLink('people'), component: PeoplePageComponent, children: [
    { path: '', redirectTo: RouteMapClass.getLeafLink('people-list'), pathMatch: 'full' },
    { path: RouteMapClass.getLeafLink('people-list'), component: ListDataPeopleComponent },
    { path: RouteMapClass.getLeafLink('people-item'), component: ItemDataPeopleComponent },
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
export class PeopleRoutingModule {}
