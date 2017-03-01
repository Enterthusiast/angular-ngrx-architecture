import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDataPeopleComponent } from './item.data.people.component';

describe('ItemDataPeopleComponent', () => {
  let component: ItemDataPeopleComponent;
  let fixture: ComponentFixture<ItemDataPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDataPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDataPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
