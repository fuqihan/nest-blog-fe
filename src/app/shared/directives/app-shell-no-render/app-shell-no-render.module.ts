import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellNoRenderDirective } from './app-shell-no-render.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppShellNoRenderDirective],
  exports: [AppShellNoRenderDirective]
})
export class AppShellNoRenderModule { }
