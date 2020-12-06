import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Compiler, Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 id="stam" #h1>Hello world</h1>

<!--
    <app-jquery></app-jquery> -->

    <div #container>
    </div>

    <app-todo-list></app-todo-list>

  `,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('h1')
  h1: ElementRef;

  @ViewChild('container', {read: ViewContainerRef})
  container: ViewContainerRef

  constructor(
    private _renderer: Renderer2,
    @Inject(PLATFORM_ID) private _platform,
    private _compiler: Compiler
  ) {}

  /**
   * only the browser is running this function
   */
  private async _loadJqueryComponent() {
    const { BrowserOnlyModule } = await import('../browser-only/browser-only.module');
    const browserModuleWithJqueryCompFactory = await this._compiler.compileModuleAndAllComponentsAsync(BrowserOnlyModule);
    const componentFactoryJquery = browserModuleWithJqueryCompFactory.componentFactories.find((componentFactory) => {
      return componentFactory.selector === 'app-jquery'
    });
    this.container.createComponent(componentFactoryJquery);
  }

  ngAfterViewInit() {
    /*
    const h1 = document.getElementById('stam');
    h1.innerText = 'foo bar';
    */
    console.log(this._platform);

    if (isPlatformBrowser(this._platform)) {
      const textElement = this._renderer.createText('foo bar browser');
      this._renderer.appendChild(this.h1.nativeElement, textElement);
    } else {
      const textElement = this._renderer.createText('foo bar node');
      this._renderer.appendChild(this.h1.nativeElement, textElement);
    }

    if (isPlatformBrowser(this._platform)) {
      this._loadJqueryComponent();
    }
  }
}
