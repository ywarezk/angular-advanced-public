import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private _http: HttpClient) {}

  fetchTasks(): Observable<Task[]> {
    return this._http.get<Task[]>('https://nztodo.herokuapp.com/api/tasks/?format=json');
  }
}
