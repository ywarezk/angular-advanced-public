import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trv3',
  template: `
    <p>
      trv3 works!
    </p>
  `,
  exportAs: 'trv3'
})
export class TRV3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  play() {
    console.log('we are now playing');
  }

}
