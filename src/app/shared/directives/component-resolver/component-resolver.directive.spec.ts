import { ComponentResolverDirective } from './component-resolver.directive';
import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-test-host-component',
  template: `
    <div appComponentResolver [component]="'TestSecondComponent'"></div>`
})
class TestHostComponent {
  component: string;
}

describe('ComponentResolverDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, ComponentResolverDirective],
      providers: [ViewContainerRef]
    });
  });

  it('should create an instance', inject([
    ViewContainerRef,
    ComponentFactoryResolver
  ], (vc: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver) => {
    const directive = new ComponentResolverDirective(vc, componentFactoryResolver);
    expect(directive).toBeTruthy();
  }));
});
