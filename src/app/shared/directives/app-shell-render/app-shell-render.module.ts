import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellRenderDirective } from './app-shell-render.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppShellRenderDirective],
  exports: [AppShellRenderDirective]
})
export class AppShellRenderModule { }
