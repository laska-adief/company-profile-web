import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCoreValueComponent } from './our-core-value.component';

describe('OurCoreValueComponent', () => {
  let component: OurCoreValueComponent;
  let fixture: ComponentFixture<OurCoreValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCoreValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCoreValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
