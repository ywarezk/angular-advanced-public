import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-root">
      <h1> {{ title }} </h1>
      <p>
        {{ someObj.description }}
      </p>

      <lib-hello></lib-hello>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'pnay-plus';

  constructor(private _http: HttpClient) {}

  someObj = {
    title: 'hello',
    description: 'world'
  }

  ngOnInit() {
    this._http.get('https://nztodo.herokuapp.com/api/tasks/?format=json').subscribe();
  }
}
