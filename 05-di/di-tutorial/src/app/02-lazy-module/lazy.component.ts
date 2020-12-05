import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: `
    <h1>
      This is loaded lazily
    </h1>
  `,
})
export class LazyComponent implements OnInit  {
  constructor(private _http: HttpClient) {}

  ngOnInit() {
    // ?
    // will the interceptor work here?
    this._http.get('https://nztodo.herokuapp.com/api/tasks/?format=json').subscribe()
  }
}
