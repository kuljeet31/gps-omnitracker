import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesecurityComponent } from './homesecurity.component';

describe('HomesecurityComponent', () => {
  let component: HomesecurityComponent;
  let fixture: ComponentFixture<HomesecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
