import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideservicesComponent } from './provideservices.component';

describe('ProvideservicesComponent', () => {
  let component: ProvideservicesComponent;
  let fixture: ComponentFixture<ProvideservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvideservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
