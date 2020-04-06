import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportsecurityComponent } from './transportsecurity.component';

describe('TransportsecurityComponent', () => {
  let component: TransportsecurityComponent;
  let fixture: ComponentFixture<TransportsecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportsecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
