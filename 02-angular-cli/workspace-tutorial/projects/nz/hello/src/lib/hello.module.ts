import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { StamComponent } from './stam/stam.component';



@NgModule({
  declarations: [HelloComponent, HelloWorldComponent, StamComponent],
  imports: [
  ],
  exports: [HelloComponent, StamComponent]
})
export class HelloModule { }
