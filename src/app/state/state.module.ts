import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomRouterSerializer } from './shared/utils';
import { environment } from '../../environments/environment';
import { appReducer, metaReducers } from './app.reducers';
import { RouterEffects } from './shared/effects/router.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducer, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      RouterEffects
    ]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
  ]
})
export class StateModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: StateModule
  ) {
    if (parentModule) {
      throw new Error(
        'StateModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        {
          provide: RouterStateSerializer,
          useClass: CustomRouterSerializer
        }
      ]
    };
  }
}
