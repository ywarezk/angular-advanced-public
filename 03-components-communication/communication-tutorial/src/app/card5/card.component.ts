/**

<app-card>
  <div>
    <h1>My Header</h1>
    <p>
      this is explaining the header
    </p>
  </div>
</app-card>

 */

import { AfterContentInit, AfterViewInit, Component, ContentChild, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div>

      <!-- begin header -->
      <!-- <ng-content select=""></ng-content> -->
      <!-- end header -->
      <div #container >
      </div>

      <div>
        <p> this is the body of the card</p>
      </div>

    </div>
  `
})
export class CardComponent implements AfterViewInit, AfterContentInit {

  @ContentChild(TemplateRef)
  templateRef: TemplateRef<{$implicit: string}> | null = null

  @ViewChild('container', {read: ViewContainerRef})
  container: ViewContainerRef | null = null;

  /**
   * runs once
   * init stuff that you need the ng-content or @ContentChild for
   */
  ngAfterContentInit() { }

  /**
   * after my view and all my children view is drawn
   * runs once
   * init stuff that you need the view for or you need the @ViewChild for
   */
  ngAfterViewInit() {
    this.container?.createEmbeddedView(<TemplateRef<any>>this.templateRef, {$implicit: 'Sweetness'});
  }


}
