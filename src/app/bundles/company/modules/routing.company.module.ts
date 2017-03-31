import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RouteMapController} from '../../../transverses/routes/route-map.app.controller';
import {PageCompanyComponent} from '../views/page.company.component';
import {ListCompanyComponent} from '../views/list.company.component';
import {PostItemFormCompanyComponent} from '../forms/post.item.form.company.component';
import {ItemCompanyComponent} from '../views/item.company.component';
import {PutItemFormCompanyComponent} from '../forms/put.item.form.company.component';
import {segmentConfig} from '../../../configs/routes/segment.config';


const companyRoutes: Routes = [
  { path: RouteMapController.getLeafLink(segmentConfig.company), component: PageCompanyComponent, children: [
    { path: RouteMapController.getLeafLink(segmentConfig.companyList), component: ListCompanyComponent, children: [
      { path: RouteMapController.getLeafLink(segmentConfig.companyItemAdd), outlet: 'action', component: PostItemFormCompanyComponent },
      { path: RouteMapController.getLeafLink(segmentConfig.companyItemEdit), outlet: 'action', component: PutItemFormCompanyComponent },
      { path: RouteMapController.getLeafLink(segmentConfig.companyItemShow), outlet: 'action', component: ItemCompanyComponent }
    ]},
    { path: RouteMapController.getLeafLink(segmentConfig.companyItemAdd), component: PostItemFormCompanyComponent },
    { path: RouteMapController.getLeafLink(segmentConfig.companyItemEdit), component: PutItemFormCompanyComponent },
    { path: RouteMapController.getLeafLink(segmentConfig.companyItemShow), component: ItemCompanyComponent }
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(companyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingCompanyModule { }
