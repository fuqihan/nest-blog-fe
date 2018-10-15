import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { isPlatformServer } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { throwError, empty } from 'rxjs';
import { CookieService } from '../../../shared/lib/cookies/cookie.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cookieService: CookieService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken: string = this.cookieService.get('token');
    if (!accessToken) {
      return next.handle(req);
    }
    const headers = req.headers.set('Authorization', `Bearer ${accessToken}`);
    return next.handle(req.clone({ headers })).pipe(
      catchError(err => {
        if (isPlatformServer(this.platformId)) {
          console.log(err);
          return empty();
        }
        return throwError(err);
      })
    );
  }
}
