/**
 * httpClient.get ----+-----+------+---------> request sent
 *               <----+-----+------+---------  server sendind response
 */

import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTH_CONFIG, AuthModuleConfig } from './tokens';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(@Inject(AUTH_CONFIG) private _config: AuthModuleConfig) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq = req;
    const token = this._config.tokenFactory();

    if (token) {
      newReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    return next.handle(newReq)

  }

}
