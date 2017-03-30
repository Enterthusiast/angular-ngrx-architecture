import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RouteMapController} from '../../../transverses/routes/route-map.app.controller';
import {PagePeopleComponent} from '../views/page.people.component';
import {ListPeopleComponent} from '../views/list.people.component';
import {PostItemFormPeopleComponent} from '../forms/post.item.form.people.component';
import {ItemPeopleComponent} from '../views/item.people.component';
import {PutItemFormPeopleComponent} from '../forms/put.item.form.people.component';


const peopleRoutes: Routes = [
  { path: RouteMapController.getLeafLink('people'), component: PagePeopleComponent, children: [
    { path: RouteMapController.getLeafLink('people-list'), component: ListPeopleComponent, children: [
      { path: RouteMapController.getLeafLink('people-item-add'), outlet: 'action', component: PostItemFormPeopleComponent },
      { path: RouteMapController.getLeafLink('people-item-edit'), outlet: 'action', component: PutItemFormPeopleComponent },
      { path: RouteMapController.getLeafLink('people-item-show'), outlet: 'action', component: ItemPeopleComponent }
    ]},
    { path: RouteMapController.getLeafLink('people-item-add'), component: PostItemFormPeopleComponent },
    { path: RouteMapController.getLeafLink('people-item-edit'), component: PutItemFormPeopleComponent },
    { path: RouteMapController.getLeafLink('people-item-show'), component: ItemPeopleComponent }
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
export class RoutingPeopleModule { }
