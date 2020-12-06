import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JqueryComponent } from './jquery.component';

@NgModule({
  declarations: [JqueryComponent],
  imports: [ CommonModule ],
  exports: [],
  providers: [],
})
export class BrowserOnlyModule {}
