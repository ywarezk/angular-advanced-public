/**
 * httpClient.get ----+-----+------+---------> request sent
 *               <----+-----+------+---------  server sendind response
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JWTInterceptor implements HttpInterceptor {

  // constructor(private _http: HttpClient) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq = req;

    if (localStorage.getItem('token')) {
      newReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      });
    }

    return next.handle(newReq)

  }

}
