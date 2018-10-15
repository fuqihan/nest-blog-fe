import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { CookieService } from './shared/lib/cookies/cookie.service';
import { CookieBackendService } from './shared/lib/cookies/cookie-backend.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule
  ],
  providers: [
    { provide: CookieService, useClass: CookieBackendService } // Use only if not prerender
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
