import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTwoComponent } from './set-two.component';

describe('SetTwoComponent', () => {
  let component: SetTwoComponent;
  let fixture: ComponentFixture<SetTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
