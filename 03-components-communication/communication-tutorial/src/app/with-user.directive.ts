import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Directive({
  selector: '[withUser]'
})
export class WithUserDirective implements OnInit {
  user$: BehaviorSubject<any> = new BehaviorSubject({
    firstName: 'Pigletshvily',
    lastName: 'chaitovski'
  });

  constructor(
    private _template : TemplateRef<{$implicit: any}>,
    private _container: ViewContainerRef
  ) { }

  ngOnInit() {
    this.user$.subscribe((user) => {
      if (user) {
        this._container.createEmbeddedView(this._template, {$implicit: user})
      }
    })
  }

}
