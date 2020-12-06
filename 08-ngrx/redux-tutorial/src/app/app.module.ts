import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './state/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReadMessageComponent } from './03-read-write-redux/read-message.component';
import { UpdateMessageComponent } from './03-read-write-redux/update-message.component';
import { TodoModule } from '../todo/todo.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';


@NgModule({
  declarations: [
    AppComponent,
    ReadMessageComponent,
    UpdateMessageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      app: appReducer
    }),
    StoreDevtoolsModule.instrument(),
    TodoModule,
    HttpClientModule,
    EffectsModule.forRoot(),
    EntityDataModule.forRoot({
      entityMetadata: {
        Task: {}
      }
    })
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: {
        root: 'https://nztodo.herokuapp.com/api/'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
