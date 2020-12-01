import { HttpClient } from '@angular/common/http';
import { Directive, Inject } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';


@Directive({
  selector: '[asyncValidate]',
})
export class AsyncValidateDirective implements AsyncValidator {

  constructor(private _http: HttpClient, @Inject(MY_FORMS_CONFIG)) {}


  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return this._http('')
  }
}
