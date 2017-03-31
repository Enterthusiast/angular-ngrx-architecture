import {Component, OnInit} from '@angular/core';

import {ItemNavigationRootClass} from '../models/item.navigation.root.class';
import {NavigationRootService} from '../services/navigation.root.service';


@Component({
  selector: 'ori-navigation-root',
  template: `
    <nav class="nav">
      <ul class="nav__nivA">
        <li *ngFor="let navRoute of navRouteList" class="nav__nivA__item">
          <a class="nav__link" (click)="onClick(navRoute)">
            <i class="fa fa-{{navRoute.icon}"></i>
            <span>
              {{navRoute.displayName}}
            </span>
          </a>
          <ul [hidden]="!hideMe[navRoute.id]" class="nav__nivB">
            <li *ngFor="let child of navRoute.children" class="nav__nivB__item">
              <a class="nav__link " routerLink="/{{child.link}}" routerLinkActive="active">
                {{child.name}}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navigation.root.scss']
})
export class NavigationRootComponent implements OnInit {

  navRouteList: ItemNavigationRootClass[];
  hideMe: any = {};

  constructor(private navService: NavigationRootService) {}

  onClick(navRoute) {
    this.hideMe[navRoute.id] = !this.hideMe[navRoute.id];
  }

  ngOnInit() {
    this.navRouteList = this.navService.getNavRouteList();
  }

}
