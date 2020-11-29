/**

<input [formControl]="floorCtrl" [floorNumber]="10" anotherArg="hello"  />

 */

import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators, ValidatorFn } from '@angular/forms';

export function floorNumberFactory(floorNumber: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null  => {
    const currentFloor = control.value;
    const floorAsNumber = parseInt(currentFloor);
    if (floorAsNumber < 0 || floorAsNumber > floorNumber) {
      return {
        'floorNumber': 'the floor you entered should be between 0 and ' + this.floorNumber
      }
    }
  }
}


@Directive({
  selector: '[floorNumber][formControlName],[floorNumber][formControl],[floorNumber][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: FloorNumberDirective
    }
  ]
})
export class FloorNumberDirective implements Validator {
  @Input('floorNumber')
  floorNumber = 10;

  @Input('anotherArg')
  stam = 10;

  validate(control: AbstractControl): ValidationErrors | null {
    return floorNumberFactory(this.floorNumber)(control);
  }
}
