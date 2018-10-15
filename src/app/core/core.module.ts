import { Injector, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APPLICATION_LAYOUTS } from './layouts/index';
import { RouterModule } from '@angular/router';
import { CORE_COMPOENNTS } from './components/index';
import { CORE_SERVICES } from './services/index';
import { CORE_GUARDS } from './guards/index';
import { PwaUpdateService } from './services/pwa-update/pwa-update.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ...APPLICATION_LAYOUTS,
    ...CORE_COMPOENNTS,
  ],
  entryComponents: [
    ...APPLICATION_LAYOUTS,
  ],
  providers: [
    ...CORE_SERVICES,
    ...CORE_GUARDS
  ]
})
export class CoreModule {
  constructor(
    private injector: Injector,
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    injector.get(PwaUpdateService);
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
