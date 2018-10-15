import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLayoutComponent } from './second-layout.component';
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

describe('SecondLayoutComponent', () => {
  let component: SecondLayoutComponent;
  let fixture: ComponentFixture<SecondLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondLayoutComponent ],
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
    fixture = TestBed.createComponent(SecondLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
