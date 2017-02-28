import { Component, Input} from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppStore } from '../../../../reducers/app-store.interface';

import { TitleTestService } from '../../../../services/test/title/title.test.service';
import { CaramelTitleTestService } from '../../../../services/test/title/caramel.title.test.service';
import { ChocolateTitleTestService } from '../../../../services/test/title/chocolate.title.test.service';

@Component({
  selector: 'app-test-item',
  providers: [
    { provide: TitleTestService, useClass: CaramelTitleTestService },
    { provide: ChocolateTitleTestService, useClass: ChocolateTitleTestService }
  ],
  template: `
     <h1>
       {{title | async}}
     </h1>
     <input type="text" [(ngModel)]="nextTitle">
     <button (click)="changeTitle()">Change Title</button>
     <app-sub-test-item [myService]="childService"></app-sub-test-item>
  `,
  styles:  []
})
export class TestItemComponent {
  title: Observable<string>;
  nextTitle: string;

  constructor (
    private store: Store<IAppStore>
    , private titleService: TitleTestService
    , private childService: ChocolateTitleTestService
  ) {

    this.title = store.select('title');

  }

  changeTitle() {

    this.titleService.setTitle(this.nextTitle);

  }

}
