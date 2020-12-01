/**

<input type="email" email checkEmail  />

 */

import { Directive } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckEmailService } from './check-email.service';


@Directive({
  selector: '[checkEmail][ngModel][type="email"],[checkEmail][formControlName][type="email"],[checkEmail][formControl][type="email"]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, multi: true, useExisting: CheckMailDirective}
  ]
})
export class CheckMailDirective implements AsyncValidator {

  constructor(private _checkEmailService: CheckEmailService) {}

  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return this._checkEmailService.checkEmail(control.value).pipe(
      map((isValid: boolean) => {
        if (!isValid) {
          return {
            'checkEmail': 'the user already exists'
          }
        } else {
          return null;
        }
      })
    );
  }

}
