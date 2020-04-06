import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmedsecurityComponent } from './armedsecurity.component';

describe('ArmedsecurityComponent', () => {
  let component: ArmedsecurityComponent;
  let fixture: ComponentFixture<ArmedsecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmedsecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmedsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
