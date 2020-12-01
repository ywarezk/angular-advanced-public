import { Component, Inject } from '@angular/core';
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
export class AppComponent {
  constructor(@Inject('hello') public hello: string) {}
}
