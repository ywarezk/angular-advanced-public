import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';

/*

module injector tree

      AppModule injector

      LazyModule injector

*/

@NgModule({
  declarations: [LazyComponent],
  imports: [ CommonModule, LazyRoutingModule ],
  exports: [],
  providers: [
    {provide: 'hello', useValue: 'hello from lazy module'}
  ],
})
export class LazyModule {}
