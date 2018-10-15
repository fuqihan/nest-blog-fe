import { Injectable, Injector } from '@angular/core';

import { CookieService } from './cookie.service';
import { CookieOptionsProvider } from './cookie-options-provider';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';

@Injectable()
export class CookieBackendService extends CookieService {
  request: any;
  response: any;
  constructor(
    private injector: Injector,
    _optionsProvider: CookieOptionsProvider,
  ) {
    super(_optionsProvider);
    this.request = this.injector.get(REQUEST);
    this.response = this.injector.get(RESPONSE);
  }

  protected get cookieString(): string {
    return this.request.headers.cookie || '';
  }

  protected set cookieString(val: string) {
    !this.request.headers ? this.request.headers = {
      cookie: val,
    } : this.request.headers = {
      ...this.request.headers,
      cookie: val,
    };
    !this.response.headers ? this.response.headers = {
      cookie: val,
    } : this.response.headers = {
      ...this.request.headers,
      cookie: val,
    };
  }
}
