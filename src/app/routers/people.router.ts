import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeoplePageComponent } from '../views/pages/people-page/people-page.component';
import { ListDisplayPeopleComponent } from '../views/components/people/display/list/list.display.people.component';

import { RouteMapController } from '../controllers/app/route-map/route-map.app.controller';

import {ItemFormPostPeopleComponent} from '../views/components/people/form/item/item.form.post.people.component';
import {ItemDisplayPeopleComponent} from '../views/components/people/display/item/item.display.people.component';
import {ItemFormPutPeopleComponent} from '../views/components/people/form/item/item.form.put.people.component';


const peopleRoutes: Routes = [
  { path: RouteMapController.getLeafLink('people'), component: PeoplePageComponent, children: [
    { path: RouteMapController.getLeafLink('people-list'), component: ListDisplayPeopleComponent, children: [
      { path: RouteMapController.getLeafLink('people-item-add'), component: ItemFormPostPeopleComponent },
      { path: RouteMapController.getLeafLink('people-item-edit'), component: ItemFormPutPeopleComponent },
      { path: RouteMapController.getLeafLink('people-item-show'), component: ItemDisplayPeopleComponent },
      { path: RouteMapController.getLeafLink('people-item-add'), outlet: 'action', component: ItemFormPostPeopleComponent },
      { path: RouteMapController.getLeafLink('people-item-edit'), outlet: 'action', component: ItemFormPutPeopleComponent },
      { path: RouteMapController.getLeafLink('people-item-show'), outlet: 'action', component: ItemDisplayPeopleComponent }
    ]},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(peopleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PeopleRoutingModule { }
