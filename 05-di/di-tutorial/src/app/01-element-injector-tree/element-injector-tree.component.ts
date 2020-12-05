import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-injector-tree',
  template: `
    <h1>hello child</h1>
  `,
  providers: [
    {
      provide: 'hello',
      useValue: 'hello from ElementInjectorTreeComponent Injector'
    }
  ]
})
export class ElementInjectorTreeComponent {
  constructor(@Inject('hello') public hello: string ) {}

}
