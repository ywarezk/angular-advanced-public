import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputExampe1Component } from './input-exampe1/input-exampe1.component';
import { OutputExampe2Component } from './output-exampe2/output-exampe2.component';
import { TRV3Component } from './trv3/trv3.component';
import { FormsModule } from '@angular/forms';
import { WithUserDirective } from './with-user.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputExampe1Component,
    OutputExampe2Component,
    TRV3Component,
    WithUserDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
