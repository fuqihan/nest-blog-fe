import { LayoutService } from './layout/layout.service';
import { WINDOW_PROVIDERS } from './window/window.service';
import { AuthService } from './auth/auth.service';
import { PwaUpdateService } from './pwa-update/pwa-update.service';

export const CORE_SERVICES = [
  LayoutService,
  AuthService,
  PwaUpdateService,
  WINDOW_PROVIDERS
];
