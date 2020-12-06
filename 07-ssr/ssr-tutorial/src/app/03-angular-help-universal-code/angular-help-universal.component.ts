/**
 * angular will help you write universal
 */

import { Location, DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2, ViewChild, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-angular-help-universal',
  template: `
    <h1>Universal code help in angular</h1>

    <h2 #stamH2>
      location
    </h2>
  `,
})
export class AngularHelpUniversalComponent {
  @ViewChild('stamH2')
  h2: ElementRef;

  constructor(
    private _location: Location,
    @Inject(DOCUMENT) private _document,
    private _renderer: Renderer2,
    @Inject(PLATFORM_ID) private _platformId
  ) { }


}
