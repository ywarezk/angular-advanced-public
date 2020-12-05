import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { HttpClientModule } from '@angular/common/http';

/*

module injector tree

      AppModule injector HttpClient

      LazyModule injector HttpClient

*/

@NgModule({
  declarations: [LazyComponent],
  imports: [ CommonModule, LazyRoutingModule/*, HttpClientModule*/ ],
  exports: [],
  providers: [
    {provide: 'hello', useValue: 'hello from lazy module'}
  ],
})
export class LazyModule {}
