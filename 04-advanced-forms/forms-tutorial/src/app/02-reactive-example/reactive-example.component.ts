import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-example',
  template: `
    <form [formGroup]="nameForm">
      <input name="fullName" type="text" formControlName="fullName" />
    </form>
  `,
})
export class ReactiveExampleComponent {
  nameForm = new FormGroup({
    fullName: new FormControl()
  })
}
