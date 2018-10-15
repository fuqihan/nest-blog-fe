import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutComponent } from './main-layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, NgModule } from '@angular/core';


@Component({
  template: ''
})
class MockDashboardComponent { }
@NgModule({
  declarations: [MockDashboardComponent],
  exports:      [MockDashboardComponent]
})
class MockModule { }

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLayoutComponent ],
      imports: [
        MockModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: MockDashboardComponent
          }
        ]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
