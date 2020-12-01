/**

FormControl, FormArray, FormGroup

FormGroup
  - FormControl (user/admin)
  - FormGroup (Admin) / FormGroup(User)

  - FormArray
    - FormGroup
    - FormGroup

checkbox - false
control - why false

1. FormGroup
     FormControl - checkbox

2. FormGroup
     FormControl - checkbox
     FormControl - why


1. FormGroup
      FormControl - radio button


2. FormGroup
      FormControl - radio button
      FormControl - number

 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-form',
  template: `
    <form [formGroup]="doYouAcceptForm" (ngSubmit)="doSomething()">
      <label>
        Do you agree?
      </label>
      <input type="checkbox" formControlName="agree" />

      <input type="text" formControlName="why" *ngIf="doYouAcceptForm.controls.why" />

      <button type="submit"> submit </button>
    </form>
  `,
})
export class DynamicFormComponent implements OnInit {
  doYouAcceptForm = this._formBuilder.group({
    agree: true
    // why:
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    const agreeFormControl = this.doYouAcceptForm.controls['agree'];

    agreeFormControl.valueChanges.pipe(
      // filter((value: boolean) => !value)
    ).subscribe((value: boolean) => {
      console.log(value);
      if (!value) {
        this.doYouAcceptForm.addControl('why', this._formBuilder.control(''))
      } else {
        this.doYouAcceptForm.removeControl('why');
      }

    })
  }

  doSomething() {
    console.log(this.doYouAcceptForm.value);
  }
}
