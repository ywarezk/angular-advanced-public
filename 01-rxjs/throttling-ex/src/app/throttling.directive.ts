import { Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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

  search$: Subject<string> = new Subject();

  private _sub: Subscription | null = null;

  constructor() { }

  @HostListener('input', ['$event.target.value'])
  search(search: string) {
    // --h---he---hel---hell---hello------->
    this.search$.next(search);
  }

  ngOnInit() {
    this._sub = this.search$.pipe(
      // --h---he---hel---hell---hello------->
      debounceTime(1000)
      // -------------------------------hello------->
    ).subscribe((search: string) => {
      this.throttling.emit(search);
    })
  }

  ngOnDestroy() {
    this._sub?.unsubscribe();
  }
}
