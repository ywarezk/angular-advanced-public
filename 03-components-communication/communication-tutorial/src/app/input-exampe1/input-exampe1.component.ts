import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-exampe1',
  template: `
    <p>
      input-exampe1 works! {{message}} {{numIGotFromParent}}
    </p>
  `,
})
export class InputExampe1Component implements OnInit, OnChanges {
  @Input()
  message: string = '';

  @Input('stamNumber')
  set numIGotFromParent(newValue: number){
    this._numIGot = newValue;



  }

  private _numIGot: number = 42;

  constructor() { }

  /**
   * jumps multiple times
   * every time the @Input memebers change
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {

  }

  /**
   * jumps once
   * Input memebers will be initiated
   */
  ngOnInit(): void {

  }

}
