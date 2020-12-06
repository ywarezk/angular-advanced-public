import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './state/todo.reducer';
import { TodoListComponent } from './todo-list.component';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todo.effect';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule ,
    // StoreModule.forFeature('todo', todoReducer),
    // EffectsModule.forFeature([
    //   TodoEffects
    // ])
  ],
  exports: [
    TodoListComponent
  ],
  providers: [],
})
export class TodoModule {}
