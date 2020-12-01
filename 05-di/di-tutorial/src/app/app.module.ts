import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StamService } from './stam.service';
import { ElementInjectorTreeComponent } from './01-element-injector-tree/element-injector-tree.component';
import { StamDirective, Stam2Directive } from './01-element-injector-tree/stam.directive';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './02-lazy-module/app-routing.module';

/**
Injector

- providers + imports
   module - providers imports


imports does not create a new injector
 */

@NgModule({
  declarations: [
    AppComponent,
    ElementInjectorTreeComponent,
    StamDirective,
    Stam2Directive
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //HttpClient,
    AppRoutingModule
  ],
  providers: [
    StamService,
    { provide: 'hello', useValue: 'hello from AppModule' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
