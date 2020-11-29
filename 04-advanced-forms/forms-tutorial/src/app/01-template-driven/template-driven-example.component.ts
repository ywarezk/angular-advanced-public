import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven-example',
  template: `
    <!-- FormGroup -->
    <form #nameForm="ngForm" (ngSubmit)="dealWithForm(nameForm)">
      <!-- FormControl -->
      <input name="myName"  type="text" ngModel #nameNgModel="ngModel" />
      <input name="lastName"  type="text" ngModel  />
    </form>
  `,
})
export class TemplateDrivenExampleComponent {
  myName = '';

  dealWithForm(form: FormGroup) {
    console.log(form.value);
  }
}
