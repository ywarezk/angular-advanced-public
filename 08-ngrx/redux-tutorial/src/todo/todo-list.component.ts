import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from './models/todo.model';
import { EntityCollectionService, EntityCollectionServiceFactory, EntitySelectorsFactory } from '@ngrx/data';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>

      <li *ngFor="let task of tasks$ | async">
        {{ task.title }}
      </li>
    </ul>
  `,
})
export class TodoListComponent implements OnInit {
  tasks$: Observable<Task[]> = this._store.select(this._entitiesSelectors.create<Task>('Task').selectEntities)

  private _taskService: EntityCollectionService<Task>;

  constructor(
    private _store: Store<any>,
    _serviceFactory: EntityCollectionServiceFactory,
    private _entitiesSelectors: EntitySelectorsFactory
  ) {
    this._taskService = _serviceFactory.create('Task');

  }

  ngOnInit(): void {
    this._taskService.getAll();
  }
}
