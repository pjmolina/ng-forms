import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFilteringComponent } from './key-filtering.component';

describe('KeyFilteringComponent', () => {
  let component: KeyFilteringComponent;
  let fixture: ComponentFixture<KeyFilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyFilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
