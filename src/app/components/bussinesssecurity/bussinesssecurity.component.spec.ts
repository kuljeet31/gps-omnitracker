import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinesssecurityComponent } from './bussinesssecurity.component';

describe('BussinesssecurityComponent', () => {
  let component: BussinesssecurityComponent;
  let fixture: ComponentFixture<BussinesssecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinesssecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinesssecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
