import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

import { PLATFORM_ID, APP_ID, Inject } from "@angular/core";
import { isPlatformBrowser, registerLocaleData } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgZorroAntdModule, NZ_I18N, zh_CN } from "ng-zorro-antd";
import zh from "@angular/common/locales/zh";

import { HomeComponent } from "./pages/home/home.component";

registerLocaleData(zh);

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: "tour-of-heroes" }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [AppComponent, HomeComponent],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? "in the browser"
      : "on the server";
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
