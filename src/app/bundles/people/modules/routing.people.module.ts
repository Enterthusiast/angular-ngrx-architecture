import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RouteMapController} from '../../../transverses/routes/route-map.app.controller';
import {PageViewPeopleComponent} from '../views/page.people.component';
import {ListViewPeopleComponent} from '../views/list.view.people.component';
import {PostItemFormPeopleComponent} from '../forms/post.item.form.people.component';
import {ItemViewPeopleComponent} from '../views/item.view.people.component';
import {PutItemFormPeopleComponent} from '../forms/put.item.form.people.component';


const peopleRoutes: Routes = [
  { path: RouteMapController.getLeafLink('people'), component: PageViewPeopleComponent, children: [
    { path: RouteMapController.getLeafLink('people-list'), component: ListViewPeopleComponent, children: [
      { path: RouteMapController.getLeafLink('people-item-add'), outlet: 'action', component: PostItemFormPeopleComponent },
      { path: RouteMapController.getLeafLink('people-item-edit'), outlet: 'action', component: PutItemFormPeopleComponent },
      { path: RouteMapController.getLeafLink('people-item-show'), outlet: 'action', component: ItemViewPeopleComponent }
    ]},
    { path: RouteMapController.getLeafLink('people-item-add'), component: PostItemFormPeopleComponent },
    { path: RouteMapController.getLeafLink('people-item-edit'), component: PutItemFormPeopleComponent },
    { path: RouteMapController.getLeafLink('people-item-show'), component: ItemViewPeopleComponent }
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
