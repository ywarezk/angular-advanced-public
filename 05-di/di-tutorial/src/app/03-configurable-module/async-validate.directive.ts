import { HttpClient } from '@angular/common/http';
import { Directive, Inject } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { MY_FORMS_CONFIG, MyFormsModuleConfig } from './tokens';

@Directive({
  selector: '[asyncValidate]',
})
export class AsyncValidateDirective implements AsyncValidator {

  constructor(private _http: HttpClient, @Inject(MY_FORMS_CONFIG) private config: MyFormsModuleConfig) {}


  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return this._http(this.config.serverUrl);
  }
}
