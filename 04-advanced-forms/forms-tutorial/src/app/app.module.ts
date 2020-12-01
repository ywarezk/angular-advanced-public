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
import { CheckMailDirective } from './06-async-validation/is-email-exist.directive';
import { EmailFormComponent } from './06-async-validation/email-form.component';
import { DynamicFormComponent } from './07-dynamic-forms/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenExampleComponent,
    ReactiveExampleComponent,
    FloorNumberDirective,
    ValidationExampleComponent,
    DashPipe,
    PhoneDirective,
    CustomFormControlComponent,
    CheckMailDirective,
    EmailFormComponent,
    DynamicFormComponent
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
