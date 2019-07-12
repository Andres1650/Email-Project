import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenFormEventComponent } from './open-form-event.component';

describe('OpenFormEventComponent', () => {
  let component: OpenFormEventComponent;
  let fixture: ComponentFixture<OpenFormEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenFormEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenFormEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
