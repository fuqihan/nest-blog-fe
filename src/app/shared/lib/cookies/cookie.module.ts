import { NgModule, ModuleWithProviders } from '@angular/core';

import { CookieOptionsProvider, COOKIE_OPTIONS } from './cookie-options-provider';
import { CookieService } from './cookie.service';
import { CookieOptions } from './cookie-options.model';
import { cookieServiceFactory } from './cookie.factory';

@NgModule({
  providers: [CookieOptionsProvider]
})
export class CookieModule {

  static forRoot(options: CookieOptions = {}): ModuleWithProviders {
    return {
      ngModule: CookieModule,
      providers: [
        {provide: COOKIE_OPTIONS, useValue: options},
        {provide: CookieService, useFactory: cookieServiceFactory, deps: [CookieOptionsProvider]}
      ]
    };
  }

  static forChild(options: CookieOptions = {}): ModuleWithProviders {
    return {
      ngModule: CookieModule,
      providers: [
        {provide: COOKIE_OPTIONS, useValue: options},
        {provide: CookieService, useFactory: cookieServiceFactory, deps: [CookieOptionsProvider]}
      ]
    };
  }
}
