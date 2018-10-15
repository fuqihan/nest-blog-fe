import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentResolverDirective } from './component-resolver.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponentResolverDirective],
  exports: [ComponentResolverDirective]
})
export class ComponentResolverModule { }
