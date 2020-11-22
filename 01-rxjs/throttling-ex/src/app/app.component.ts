import { Component } from '@angular/core';
import { Task } from './models/task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  template: `
    <input type="search" (throttling)="search($event)" />
    <ul>
      <li *ngFor="let task of tasks">
        {{ task.title }}
      </li>
    </ul>
  `,
})
export class AppComponent {
  tasks: Task[] = [];

  constructor(private _taskService: TaskService) {}

  search(search: string) {
    // const hello = 'string';
    this._taskService.fetchTasks(search).subscribe((tasksFromServer) => {
      this.tasks = tasksFromServer;
    })
  }
}
