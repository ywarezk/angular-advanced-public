import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-exampe2',
  template: `
    <p>
      output-exampe2 works!
    </p>
    <button (click)="sendHello()">
      send to parent hello world
    </button>
  `,
})
export class OutputExampe2Component implements OnInit {
  @Output()
  hello: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  sendHello() {
    this.hello.emit('hello world')
  }

}
