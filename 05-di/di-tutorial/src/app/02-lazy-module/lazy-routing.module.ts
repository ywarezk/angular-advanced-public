import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LazyComponent}
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class LazyRoutingModule {}
