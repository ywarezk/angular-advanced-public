import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jquery',
  template: `
    <h1>
      This is not supported by node
    </h1>
    <p>
    Node cannot run this code if:
    we are using browser api
    jquery
    </p>
  `,
})
export class JqueryComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
