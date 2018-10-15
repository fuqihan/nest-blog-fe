import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return this.authService.isLoggedIn$.pipe(
      first(),
      tap(loggedIn => {
        console.log(loggedIn)
        if (!loggedIn) {
          this.router.navigateByUrl('/');
        }
      }),
    );
  }
}
