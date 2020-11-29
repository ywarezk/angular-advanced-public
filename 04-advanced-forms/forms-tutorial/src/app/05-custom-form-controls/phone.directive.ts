/**
052-244
<input type="phone" [formControl]="phoneCtrl" />

<input type="creditCard" [formControl]="phoneCtrl" />

<input type="cities" [formControl]="cities" />

<input type="autocomplete"  [formControl]="cities" />

<app-address [formControl]="myAddress"></app-address>
 */

import { Directive, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';
import { DashPipe } from './dash.pipe';

@Directive({
  selector: 'input[type=phone][formControlName],input[type=phone][formControl],input[type=phone][ngModel]',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: PhoneDirective},
    // { provide: NG_VALIDATORS, multi: true, useExisting: PhoneDirective }
  ]
})
export class PhoneDirective implements ControlValueAccessor {
  private _changeCb: (newPhoneValue: string) => void = () => {};
  private _touchCb: () => void = () => {}

  constructor(private _element: ElementRef<HTMLInputElement>, private _dashPipe: DashPipe) {
    // fromEvent(this._element.nativeElement, 'input').subscribe(
    //   (event) => this._changeCb((event.target as any).value)
    // )
  }

  /**
   * update from FormControl to input
   * FormControl ----> input
   * @param obj
   */
  writeValue(obj: string): void {
    const withDash = this._dashPipe.transform(obj, 3);
    this._element.nativeElement.value = withDash;
  }

  /**
   * input ---> FormControl
   * @param fn
   */
  registerOnChange(fn: any): void {
    this._changeCb = fn;
  }

  /**
   * input ---> FormControl
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this._touchCb = fn;
  }

  /**
   * FormControl -----> input
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void {
    this._element.nativeElement.disabled = isDisabled;
  }

  @HostListener('input', ['$event.target.value'])
  userTyped(value: string) {
    const valueWithDash = this._dashPipe.transform(value, 3);
    this._changeCb(valueWithDash);
    this._element.nativeElement.value = valueWithDash;
  }

  @HostListener('blur')
  focus() {
    this._touchCb();
  }
}
