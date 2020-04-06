import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoldutiesComponent } from './protocolduties.component';

describe('ProtocoldutiesComponent', () => {
  let component: ProtocoldutiesComponent;
  let fixture: ComponentFixture<ProtocoldutiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocoldutiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocoldutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
