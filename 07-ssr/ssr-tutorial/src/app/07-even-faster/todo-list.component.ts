import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let task of (todoList$ | async)" >
        {{task.title}}
      </li>
    </ul>
  `,
})
export class TodoListComponent implements OnInit {
  todoList$: Observable<any[]>;

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.todoList$ = this._http.get<any[]>('http://nztodo.herokuapp.com/api/tasks/?format=json');
  }
}
