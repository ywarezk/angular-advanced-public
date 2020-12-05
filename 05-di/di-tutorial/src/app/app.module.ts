import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StamService } from './stam.service';
import { ElementInjectorTreeComponent } from './01-element-injector-tree/element-injector-tree.component';
import { StamDirective, Stam2Directive } from './01-element-injector-tree/stam.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './02-lazy-module/app-routing.module';
import {AuthModule} from '@nz/auth@dev';

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
    AppRoutingModule,
    AuthModule.create({
      tokenFactory: () => {
        return localStorage.getItem('token');
      }
    })
  ],
  providers: [
    StamService, // {provide: StamService, useClass: StamService}
    { provide: 'hello', useValue: 'hello from AppModule' },
    { provide: 'stam', deps: [HttpClient], useFactory: (http) => {

    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
