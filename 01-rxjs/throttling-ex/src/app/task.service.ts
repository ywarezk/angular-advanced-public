import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from './models/task';
import { catchError} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class TaskService {

	constructor(private _httpClient: HttpClient) { }

	// no internet
	fetchTasks(search: string): Observable<Task[]> {
		return this._httpClient
			.get<Task[]>(`https://nztodo.herokuapp.com/api/tasks/?format=json&search=${search}`)
			// .pipe(
			// 	catchError((err) => {
			// 		// return new observable
			// 		return of([]);
			// 	})
			// );
	}
}
