import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSpecialityComponent } from './our-speciality.component';

describe('OurSpecialityComponent', () => {
  let component: OurSpecialityComponent;
  let fixture: ComponentFixture<OurSpecialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurSpecialityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
