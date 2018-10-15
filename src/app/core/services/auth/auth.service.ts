import { Injectable } from '@angular/core';
import { map, filter, shareReplay, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export const ANONYMOUS_USER: any = {
  id: undefined,
};

@Injectable()
export class AuthService {
  private subject = new BehaviorSubject<any>(undefined);

  user$: Observable<any> = this.subject.asObservable().pipe(filter(user => !!user));

  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user.id));

  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));

  constructor(private http: HttpClient) {

  }

  fetchUser() {
    // const promise = this.http.get('/api/user')
    //   .toPromise()
    //   .then(user => {
    //     this.subject.next(user ? user : ANONYMOUS_USER);
    //
    //     return user;
    //   });
    //
    // return promise;
  }

  signUp(email: string, password: string): void {
    this.http.post<any>('/api/signup', {email, password}).pipe(
      shareReplay(),
      tap(user => this.subject.next(user)));
  }

  login(email: string, password: string): void {
    this.http.post<any>('/api/login', {email, password}).pipe(
      shareReplay(),
      tap(user => this.subject.next(user)));
  }

  logout(): void {
    this.http.post('/api/logout', null).pipe(
      shareReplay(),
      tap(user => this.subject.next(ANONYMOUS_USER)));
  }
}
