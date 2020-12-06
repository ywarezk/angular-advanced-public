import { createReducer, on } from '@ngrx/store';
import { updateMessage } from './app.actions';
import { AppState } from './app.state';

export const appReducer = createReducer<AppState>(
  {
    modal: null,
    message: 'hello1'
  },
  on(updateMessage, (state, action) => {
    return {
      ...state,
      message: action.newMessage
    }
  })
);
