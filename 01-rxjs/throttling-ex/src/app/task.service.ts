import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _httpClient: HttpClient) { }

  fetchTasks(search: string): Observable<Task[]> {
    return this._httpClient
      .get<Task[]>(`https://nztodo.herokuapp.com/api/tasks/?format=json&search=${search}`);
  }
}
