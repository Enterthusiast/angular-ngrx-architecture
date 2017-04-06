import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RouteMapController} from '../../../../transverses/routes/route-map.app.controller';
import {PageJobPeopleComponent} from '../views/page.job.people.component';
import {ListJobPeopleComponent} from '../views/list.job.people.component';
import {PostItemFormJobPeopleComponent} from '../forms/post.item.form.job.people.component';
import {ItemJobPeopleComponent} from '../views/item.job.people.component';
import {PutItemFormJobPeopleComponent} from '../forms/put.item.form.job.people.component';


const jobPeopleRoutes: Routes = [
  { path: RouteMapController.getLeafLink('people') + '/:id/' + RouteMapController.getLeafLink('job-people'), component: PageJobPeopleComponent },
  { path: 'contact/:people_id/job/list', component: ListJobPeopleComponent },
  { path: 'contact/:people_id/job/add', component: PostItemFormJobPeopleComponent },
  { path: 'contact/:people_id/job/edit', component: PutItemFormJobPeopleComponent },
  { path: 'contact/:people_id/job/:id', component: ItemJobPeopleComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(jobPeopleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingJobPeopleModule { }
