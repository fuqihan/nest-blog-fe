import {
  ComponentFactory, ComponentFactoryResolver, Directive, Input, OnChanges, SimpleChanges,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appComponentResolver]'
})
export class ComponentResolverDirective implements OnChanges {
  @Input('component') component: any;

  constructor(private vc: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['component']) {
      const factory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(this.component);
      this.vc.clear();
      this.vc.createComponent(factory);
    }
  }

}
