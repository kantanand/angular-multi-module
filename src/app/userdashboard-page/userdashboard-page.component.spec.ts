import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboardPageComponent } from './userdashboard-page.component';

describe('UserdashboardPageComponent', () => {
  let component: UserdashboardPageComponent;
  let fixture: ComponentFixture<UserdashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
