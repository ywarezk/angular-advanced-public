/**
 This component will change the message in the store
 */

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state/app.state';
import { updateMessage } from '../state/app.actions';

@Component({
  selector: 'app-update-message',
  template: `
    <button (click)="updateMessage()">
      Change message
    </button>
  `,
})
export class UpdateMessageComponent {
  constructor(private _store: Store<State>) {

  }

  updateMessage() {
    this._store.dispatch(updateMessage({newMessage: 'foo bar ' + Math.random() }))
  }
}
