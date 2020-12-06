import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchTasks, setTasks } from './todo.actions';
import { map, mergeMap } from 'rxjs/operators';
import { TaskService } from '../task.service';
import { Task } from '../models/todo.model';
// import { Action as redu } from '@ngrx/store';

@Injectable({providedIn: 'root'})
export class TodoEffects {

  fetchTasks$ = createEffect(
    // Observable<{type: new action}>
    () => {

      return this._actions.pipe(
        ofType(fetchTasks),
        mergeMap(() => this._taskService.fetchTasks()),
        map((tasks: Task[]) => setTasks({tasks}))
      )

    }
  )

  constructor(
    private _actions: Actions,
    private _taskService: TaskService
  ) {}

}
