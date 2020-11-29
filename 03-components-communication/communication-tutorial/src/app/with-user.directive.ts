/**

<div *withUser="let user; else guestUser">
  <h1>
    hello user {{user}}
  </h1>
</div>
<ng-template #guestUser>
  <h1>
    hello guest
  </h1>
</ng-template>

<div *ngIf="someCondition">
</div>

<ng-template [ngIf]="someCondition">
  <div>
  </div>
</ng-template>

 */

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
