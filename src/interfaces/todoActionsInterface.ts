import { ReduxBaseAction } from './reduxBaseActionInterface';
import { ReduxActionTypes } from 'src/actions';
import { Todo } from './todoInterface';

export interface AddTodoAction extends ReduxBaseAction {
  type: ReduxActionTypes.ADD_TODO;
  todo: Todo;
}

export interface ToggleTodoAction extends ReduxBaseAction {
  type: ReduxActionTypes.TOGGLE_TODO;
  id: string;
}

export interface RemoveTodoAction extends ReduxBaseAction {
  type: ReduxActionTypes.REMOVE_TODO;
  id: string;
}
