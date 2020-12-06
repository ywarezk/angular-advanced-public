import { TodoState } from 'src/todo/state/todo.state';

export interface AppState {
  modal: string;
  message: string;
}

export interface State {
  app: AppState;
  todo: TodoState
}
