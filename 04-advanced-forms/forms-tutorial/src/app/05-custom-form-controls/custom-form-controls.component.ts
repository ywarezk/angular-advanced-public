import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-form-control',
  template: `
    <form [formGroup]="phoneForm">
      <!-- 052-1234567, add dash, required, pattern, maxlength="11" minlength="11" -->
      <input type="phone" formControlName="phone" required />
      {{ phoneForm.controls.phone.value }}
    </form>
  `,
})
export class CustomFormControlComponent {
  phoneForm : FormGroup = this._formBuilder.group(
    {
      phone: '0521234567'
    }
  )

  constructor(private _formBuilder: FormBuilder) {}
}
