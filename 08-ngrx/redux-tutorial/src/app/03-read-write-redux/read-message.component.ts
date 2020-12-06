import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../state/app.state';

@Component({
  selector: 'app-read-message',
  template: `
    <h1>
      Read from ngrx store
    </h1>

    <p>
      {{ message$ | async }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadMessageComponent {
  message$: Observable<string> = this._store$.select('app', 'message')

  constructor(private _store$: Store<State>) {}
}
