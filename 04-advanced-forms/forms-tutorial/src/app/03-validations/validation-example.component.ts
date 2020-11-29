import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { floorNumberFactory } from '../04-custom-validation/floor-number.directive';

@Component({
  selector: 'app-validation-example',
  template: `

    <form >
      <!-- FormControl -->
      <h1>Template driven validation</h1>
      <input
        #floorNgModel="ngModel"
        name="myName" type="text" ngModel floorNumber="5" maxlength="20" />
      {{ floorNgModel.errors | json }}
    </form>

    <form [formGroup]="nameForm">
      <h1>Reactive validation</h1>
      <input name="fullName" type="text" formControlName="fullName" floorNumber />
      <input name="age" type="number" formControlName="age" />
    </form>
  `,
})
export class ValidationExampleComponent{
  nameForm = new FormGroup({
    fullName: new FormControl(),
    age: new FormControl('', [floorNumberFactory(5)])
  })
}
