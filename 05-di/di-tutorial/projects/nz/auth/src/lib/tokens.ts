import { InjectionToken } from '@angular/core';

export interface AuthModuleConfig {
  tokenFactory: () => string;
}

export const AUTH_CONFIG = new InjectionToken<AuthModuleConfig>('auth module config');
