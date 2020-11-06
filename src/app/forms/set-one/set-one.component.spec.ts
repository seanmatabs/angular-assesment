import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOneComponent } from './set-one.component';

describe('SetOneComponent', () => {
  let component: SetOneComponent;
  let fixture: ComponentFixture<SetOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
