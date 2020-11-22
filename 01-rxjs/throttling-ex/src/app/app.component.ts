import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from './models/task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  template: `
    <input type="search" (throttling)="search($event)" />
    <ul>
      <li *ngFor="let task of (tasks$ | async)">
        {{ task.title }}
      </li>
    </ul>
  `,
})
export class AppComponent {
  tasks: Task[] = [];

  tasks$: Observable<Task[]> | null = null;

  err: Error | null = null;

  constructor(private _taskService: TaskService) {}

  search(search: string) {
    // const hello = 'string';
    /*
    this._taskService.fetchTasks(search).subscribe((tasksFromServer) => {
      this.tasks = tasksFromServer;
    })
    */

    this.tasks$ = this._taskService.fetchTasks(search).pipe(
      catchError((err) => {
        // do something on error
        this.err = err;
        return of([])
      })
    );

    // this._taskService.fetchTasks(search).subscribe(() => {

    // }, () => {

    // });
  }
}
