import { Directive, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

/*
let hello: string | number = 'hello';
hello = 42;
*/

@Directive({
  selector: '[throttling]'
})
export class ThrottlingDirective implements OnInit, OnDestroy {
  @Output('throttling')
  throttling: EventEmitter<string> = new EventEmitter()

  // search$: Subject<string> = new Subject();

  private _sub: Subscription | null = null;

  constructor( _element: ElementRef ) {
    this._sub = fromEvent<InputEvent>(_element.nativeElement, 'input').pipe(
      map((event) => (<HTMLInputElement>event.target)?.value),
      debounceTime(1000),
    ).subscribe((search: string) => {
      this.throttling.emit(search);
    })
  }

  // @HostListener('input', ['$event.target.value'])
  // search(search: string) {
  //   // --h---he---hel---hell---hello------->
  //   this.search$.next(search);
  // }

  ngOnInit() {
    // this._sub = this.search$.pipe(
    //   // --h---he---hel---hell---hello------->
    //   debounceTime(1000)
    //   // -------------------------------hello------->
    // ).subscribe((search: string) => {
    //   this.throttling.emit(search);
    // })
  }

  ngOnDestroy() {
    this._sub?.unsubscribe();
  }
}
