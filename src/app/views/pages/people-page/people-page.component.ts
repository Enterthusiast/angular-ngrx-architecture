import { Component } from '@angular/core';

@Component({
  selector: 'ori-people-page',
  template: `    
    <a class="btn btn-link"
       [routerLink]="[ { outlets: { action: ['list'] } } ]"
       routerLinkActive="active">
      Afficher
    </a>
    <router-outlet></router-outlet>
    <router-outlet name="action"></router-outlet>
  `,
  styles: []
})
export class PeoplePageComponent {}
