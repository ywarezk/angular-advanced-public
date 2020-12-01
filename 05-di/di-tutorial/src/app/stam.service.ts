import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StamService {
  constructor(private _http: HttpClient, private _injector: Injector) {}

  stam() {
    // this._injector.get(SomeService)
  }
}
