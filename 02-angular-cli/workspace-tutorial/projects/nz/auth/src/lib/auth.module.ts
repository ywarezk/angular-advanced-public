import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './jwt.interceptor';


@NgModule({
  declarations: [],
  imports: [
    // HttpClientModule
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true}
  ]
})
export class AuthModule { }
