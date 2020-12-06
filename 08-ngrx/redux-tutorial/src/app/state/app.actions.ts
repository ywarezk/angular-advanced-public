/**
The actions that can effect the app section in our state
 */

import { createAction, props } from '@ngrx/store';

export const updateMessage = createAction(
  'SET MESSAGE',
  props<{ newMessage: string}>()
)
