import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDataPeopleComponent } from './list.data.people.component';

describe('ListDataPeopleComponent', () => {
  let component: ListDataPeopleComponent;
  let fixture: ComponentFixture<ListDataPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDataPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDataPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
