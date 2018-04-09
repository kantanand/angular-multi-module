import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreAndBookPageComponent } from './explore-and-book-page.component';

describe('ExploreAndBookPageComponent', () => {
  let component: ExploreAndBookPageComponent;
  let fixture: ComponentFixture<ExploreAndBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreAndBookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreAndBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
