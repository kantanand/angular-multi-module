import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrexPageComponent } from './trex-page.component';

describe('TrexPageComponent', () => {
  let component: TrexPageComponent;
  let fixture: ComponentFixture<TrexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrexPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
