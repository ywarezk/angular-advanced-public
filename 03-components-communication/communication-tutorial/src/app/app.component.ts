import { AfterViewChecked, AfterViewInit, Component, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { TRV3Component } from './trv3/trv3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  user$: Observable<any> = of({
    firstName: 'Pigletshvily',
    lastName: 'chaitovski'
  })


  @ViewChild('trv')
  trvChild: TRV3Component | null = null;

  @ViewChild(TRV3Component)
  trvChild2: TRV3Component | null = null;

  @ViewChild('helloP')
  stamP: ElementRef | null = null;

  @ViewChild('grabNgModel')
  ngModel: NgModel | null = null;

  @ViewChild('someTemplate')
  template: TemplateRef<any> | null = null;

  @ViewChild('container', {read: ViewContainerRef})
  container: ViewContainerRef | null = null;

  title = 'communication-tutorial';

  myNumVar = 10;

  stamInput = 'hello';

  someCondition = true;

  sayHello(msg: string) {
    console.log(msg);
  }

  ngAfterViewInit() {
    this.trvChild?.play();
    // this.myNumVar = 234234;
    setTimeout(() => {
      this.myNumVar = 234234;
    })

    this.container?.createEmbeddedView(this.template as TemplateRef<any>)
  }

  randomNum(){
    return Math.random();
  }
}
