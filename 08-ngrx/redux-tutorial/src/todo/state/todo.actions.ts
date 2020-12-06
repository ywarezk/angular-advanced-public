import { createAction, props } from '@ngrx/store';
import { Task } from '../models/todo.model';

export const fetchTasks = createAction('Im intrested in the tasks from the server');

export const setTasks = createAction('SET_TASKS', props<{tasks: Task[]}>());
