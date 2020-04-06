import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogoneComponent } from './blogone.component';

describe('BlogoneComponent', () => {
  let component: BlogoneComponent;
  let fixture: ComponentFixture<BlogoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
