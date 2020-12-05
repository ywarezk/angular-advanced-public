import { ModuleWithProviders, NgModule } from '@angular/core';
import { JWTInterceptor } from './jwt.interceptor';
import { AuthModuleConfig, AUTH_CONFIG } from './tokens';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [],
  providers: [
    JWTInterceptor,
    { provide: HTTP_INTERCEPTORS, multi: true, useExisting: JWTInterceptor }
  ]
})
export class AuthModule {
  static create(config: AuthModuleConfig): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        { provide: AUTH_CONFIG, useValue: config}
      ]
    }
  }
}
