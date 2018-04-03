import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePageComponent } from './save-page.component';

describe('SavePageComponent', () => {
  let component: SavePageComponent;
  let fixture: ComponentFixture<SavePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
