import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
// import { StamService } from './stam.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>
    {{ hello }}
    </h1>

    <!--
      {
        'hello': ['hello from StamDirective', 'hello from Stam2Directive2222']
      }
     -->
    <p stam stam2>
    </p>

    <!--
      {
        'hello': 'hello from ElementInjectorTreeComponent Injector'
      }
     -->
    <app-element-injector-tree></app-element-injector-tree>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor(@Inject('hello') public hello: string, private _http: HttpClient) {}

  ngOnInit() {
    // will the interceptor work here?
    localStorage.setItem('token', 'hello');
    this._http.get('https://nztodo.herokuapp.com/api/tasks/?format=json').subscribe();
  }
}
