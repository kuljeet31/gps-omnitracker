import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogtwoComponent } from './blogtwo.component';

describe('BlogtwoComponent', () => {
  let component: BlogtwoComponent;
  let fixture: ComponentFixture<BlogtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
