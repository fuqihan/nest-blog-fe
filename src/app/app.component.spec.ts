import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentResolverModule } from './shared/directives/component-resolver/component-resolver.module';
import { PwaUpdateService } from './core/services/pwa-update/pwa-update.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        NgProgressModule.forRoot(),
        NgProgressHttpModule,
        ComponentResolverModule,
        ServiceWorkerModule.register('', { enabled: false }),
        MatSnackBarModule,
        RouterTestingModule
      ],
      providers: [
        PwaUpdateService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
