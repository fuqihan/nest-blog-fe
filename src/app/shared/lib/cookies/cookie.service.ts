import { Injectable } from '@angular/core';

import { CookieOptionsProvider } from './cookie-options-provider';
import { CookieOptions } from './cookie-options.model';
import { isBlank, isString, mergeOptions, safeDecodeURIComponent, safeJsonParse } from './utils';

declare interface Document {
  cookie: string;
}

declare const document: Document;

export interface ICookieService {
  get(key: string): string;

  getObject(key: string): Object;

  getAll(): Object;

  put(key: string, value: string, options?: CookieOptions): void;

  putObject(key: string, value: Object, options?: CookieOptions): void;

  remove(key: string, options?: CookieOptions): void;

  removeAll(options?: CookieOptions): void;
}

@Injectable()
export class CookieService implements ICookieService {

  protected options: CookieOptions;

  protected get cookieString(): string {
    return typeof document !== 'undefined' ? document.cookie : '';
  }

  protected set cookieString(val: string) {
    if (typeof document !== 'undefined') {
      document.cookie = val;
    }
  }

  constructor(private _optionsProvider: CookieOptionsProvider) {
    this.options = this._optionsProvider.options;
  }

  get(key: string): string {
    return (<any>this._cookieReader())[key];
  }

  getObject(key: string): Object {
    const value = this.get(key);
    return value ? safeJsonParse(value) : value;
  }

  getAll(): Object {
    return <any>this._cookieReader();
  }

  put(key: string, value: string, options?: CookieOptions) {
    this._cookieWriter()(key, value, options);
  }

  putObject(key: string, value: Object, options?: CookieOptions) {
    this.put(key, JSON.stringify(value), options);
  }

  remove(key: string, options?: CookieOptions): void {
    this._cookieWriter()(key, undefined, options);
  }

  removeAll(options?: CookieOptions): void {
    const cookies = this.getAll();
    Object.keys(cookies).forEach(key => {
      this.remove(key, options);
    });
  }

  private _cookieReader(): Object {
    let lastCookies = {};
    let lastCookieString = '';
    let cookieArray: string[], cookie: string, i: number, index: number, name: string;
    const currentCookieString = this.cookieString;
    if (currentCookieString !== lastCookieString) {
      lastCookieString = currentCookieString;
      cookieArray = lastCookieString.split('; ');
      lastCookies = {};
      for (i = 0; i < cookieArray.length; i++) {
        cookie = cookieArray[i];
        index = cookie.indexOf('=');
        if (index > 0) {  // ignore nameless cookies
          name = safeDecodeURIComponent(cookie.substring(0, index));
          if (isBlank((<any>lastCookies)[name])) {
            (<any>lastCookies)[name] = safeDecodeURIComponent(cookie.substring(index + 1));
          }
        }
      }
    }
    return lastCookies;
  }

  private _cookieWriter() {
    const that = this;

    return function (name: string, value: string, options?: CookieOptions) {
      that.cookieString = that._buildCookieString(name, value, options);
    };
  }

  private _buildCookieString(name: string, value: string, options?: CookieOptions): string {
    const opts: CookieOptions = mergeOptions(this.options, options);
    let expires: any = opts.expires;
    if (isBlank(value)) {
      expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
      value = '';
    }
    if (isString(expires)) {
      expires = new Date(expires);
    }
    const cookieValue = opts.storeUnencoded ? value : encodeURIComponent(value);
    let str = encodeURIComponent(name) + '=' + cookieValue;
    str += opts.path ? ';path=' + opts.path : '';
    str += opts.domain ? ';domain=' + opts.domain : '';
    str += expires ? ';expires=' + expires.toUTCString() : '';
    str += opts.secure ? ';secure' : '';
    str += opts.httpOnly ? '; HttpOnly' : '';

    const cookieLength = str.length + 1;
    if (cookieLength > 4096) {
      console.log(`Cookie \'${name}\' possibly not set or overflowed because it was too large (${cookieLength} > 4096 bytes)!`);
    }
    return str;
  }
}
