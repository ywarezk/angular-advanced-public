import { Directive } from '@angular/core';

@Directive({
  selector: '[stam]',
  providers: [
    {
      provide: 'hello', useValue: 'hello from StamDirective', multi: true
    }
  ]
})
export class StamDirective { }

@Directive({
  selector: '[stam2]',
  providers: [
    {
      provide: 'hello', useValue: 'hello from Stam2Directive2222', multi: true
    }
  ]
})
export class Stam2Directive { }
