import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Redux hello world
    </h1>

    <app-read-message></app-read-message>

    <app-update-message></app-update-message>

    <h1>
      todo list
    </h1>

    <app-todo-list></app-todo-list>
  `,
})
export class AppComponent {
  title = 'redux-tutorial';
}
