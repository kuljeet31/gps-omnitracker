import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwarepreviewComponent } from './hardwarepreview.component';

describe('HardwarepreviewComponent', () => {
  let component: HardwarepreviewComponent;
  let fixture: ComponentFixture<HardwarepreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwarepreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwarepreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
