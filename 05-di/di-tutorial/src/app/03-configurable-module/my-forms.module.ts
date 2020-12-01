import { NgModule } from '@angular/core';
/**

@NgModule({
  imports: [
    MyFormsModule.forRoot()
    // RouterModule.forRoot([...])
  ]
})
export class AppModule {

}

 */

import { CommonModule } from '@angular/common';
import { AsyncValidateDirective } from './async-validate.directive';
import { ModuleWithProviders, InjectionToken} from '@angular/core';
import { MY_FORMS_CONFIG, MyFormsModuleConfig } from './tokens';

@NgModule({
  declarations: [
    AsyncValidateDirective
  ],
  imports: [ CommonModule ],
  exports: [
    AsyncValidateDirective
  ],
  providers: [],
})
export class MyFormsModule {

  static forRoot(config: MyFormsModuleConfig): ModuleWithProviders<MyFormsModule> {
    return {
      ngModule: MyFormsModule,
      providers: [
        {
          provide: MY_FORMS_CONFIG,
          useValue: config
        }
      ]
    }
  }
}
