import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithBlurComponent } from './with-blur.component';

describe('WithBlurComponent', () => {
  let component: WithBlurComponent;
  let fixture: ComponentFixture<WithBlurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithBlurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithBlurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
