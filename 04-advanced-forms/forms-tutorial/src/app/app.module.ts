import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenExampleComponent } from './01-template-driven/template-driven-example.component';
import { ReactiveExampleComponent } from './02-reactive-example/reactive-example.component';
import { FloorNumberDirective } from './04-custom-validation/floor-number.directive';
import { ValidationExampleComponent } from './03-validations/validation-example.component';
import { DashPipe } from './05-custom-form-controls/dash.pipe';
import { PhoneDirective } from './05-custom-form-controls/phone.directive';
import { CustomFormControlComponent } from './05-custom-form-controls/custom-form-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenExampleComponent,
    ReactiveExampleComponent,
    FloorNumberDirective,
    ValidationExampleComponent,
    DashPipe,
    PhoneDirective,
    CustomFormControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DashPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
