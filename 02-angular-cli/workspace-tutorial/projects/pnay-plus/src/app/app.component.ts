import { Component, ViewEncapsulation } from '@angular/core';

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
export class AppComponent {
  title = 'pnay-plus';

  someObj = {
    title: 'hello',
    description: 'world'
  }
}
