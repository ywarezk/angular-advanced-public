import { InjectionToken } from '@angular/core';

export interface MyFormsModuleConfig {
  serverUrl: string;
}

export const MY_FORMS_CONFIG: InjectionToken<MyFormsModuleConfig> = new InjectionToken<MyFormsModuleConfig>('holds the configuration for MyFormsModule')
