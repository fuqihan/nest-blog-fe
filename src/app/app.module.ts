import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { MetaModule } from '@ngx-meta/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app.routing';
import { CookieModule } from './shared/lib/cookies/cookie.module';
import { CoreModule } from './core/core.module';
import { StateModule } from './state/state.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ComponentResolverModule } from './shared/directives/component-resolver/component-resolver.module';
import { AuthInterceptor } from './core/interceptors/auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: environment.appId }),
    BrowserTransferStateModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MetaModule.forRoot(),
    CookieModule.forRoot(),
    CoreModule.forRoot(),
    StateModule.forRoot(),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    AppRoutingModule,
    DashboardModule,
    ComponentResolverModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
