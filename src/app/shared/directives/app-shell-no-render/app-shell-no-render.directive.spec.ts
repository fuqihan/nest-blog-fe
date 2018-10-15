import { AppShellNoRenderDirective } from './app-shell-no-render.directive';
import { inject, TestBed } from '@angular/core/testing';
import { PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';

describe('AppShellNoRenderDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ViewContainerRef,
        TemplateRef,
        { provide: PLATFORM_ID, useValue: 'fakeID' },
      ]
    });
  });
  it('should create an instance', inject([
    ViewContainerRef,
    TemplateRef,
    PLATFORM_ID
  ], (viewContainer: ViewContainerRef, templateRef: TemplateRef<any>, platformId) => {
    const directive = new AppShellNoRenderDirective(viewContainer, templateRef, platformId);
    expect(directive).toBeTruthy();
  }));
});
