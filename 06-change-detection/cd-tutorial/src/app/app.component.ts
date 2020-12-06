import { Component, NgZone, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Hello world {{ log() }} {{message.counter | async}}
    </h1>
    <app-child></app-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  counter = 0;

  constructor(private _zone: NgZone, public message: MessageService) {}

  ngOnInit() {
    // $timeout
    setTimeout(() => {
      console.log('timner in app component');
      this.message.counter.next(this.message.counter.value + 1);
    }, 1000)
  }

  log() {
    console.log('cd: AppComponent');
  }
}
