import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatesecurityComponent } from './privatesecurity.component';

describe('PrivatesecurityComponent', () => {
  let component: PrivatesecurityComponent;
  let fixture: ComponentFixture<PrivatesecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatesecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatesecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
