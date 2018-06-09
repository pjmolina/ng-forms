import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollPeopleComponent } from './enroll-people.component';

describe('EnrollPeopleComponent', () => {
  let component: EnrollPeopleComponent;
  let fixture: ComponentFixture<EnrollPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
