import { Component, OnInit, ChangeDetectionStrategy, ComponentFactory, ChangeDetectorRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

// am I dirty am I clean
// clean - my children are clean as well
// dirty - im dirty maybe my children are dirty as well

// settimeout - clean
// Promise Observable - clean
// setinterval - clean

// dirty
// events for me or my children
// changed @Input will trigger cd
// specifically telling im dirty using the ChangeDetectorRef
// async pipe

@Component({
  selector: 'app-child',
  template: `
    <h1 (click)="counter=counter+1"> Child {{log()}} {{ counter }}</h1>
    <app-grand></app-grand>

<!--
    <p>
    {{ tasks$ | async | json}}
    </p> -->

    <p>
      {{message.counter | async}}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() msg: string;
  counter = 0;

  tasks$: any;

  constructor(private _cdRef: ChangeDetectorRef, private _http: HttpClient, public message: MessageService) {}

  ngOnInit() {
    setTimeout(() => {
      console.log('timer is running in child');
      this.counter++;
      // this._cdRef.detectChanges();
    }, 1000)

    this.tasks$ = this._http.get('http://nztodo.herokuapp.com/api/tasks/?format=json');
  }

  log() {
    console.log('cd: ChildComponent');
  }
}
