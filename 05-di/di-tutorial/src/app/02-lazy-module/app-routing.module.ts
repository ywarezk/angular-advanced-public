import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'lazy', loadChildren: async () => {
        const moduleFile = await import('./lazy.module');
        return moduleFile.LazyModule;
      }}
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule {}
