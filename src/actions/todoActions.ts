import { ReduxActionTypes } from '.';
import {
  Todo,
  AddTodoAction,
  ToggleTodoAction,
  RemoveTodoAction,
} from 'src/interfaces';

export const addTodo = (todo: Todo): AddTodoAction => {
  return {
    type: ReduxActionTypes.ADD_TODO,
    todo,
  };
};

export const toggleTodo = (id: string): ToggleTodoAction => {
  return {
    type: ReduxActionTypes.TOGGLE_TODO,
    id,
  };
};

export const removeTodo = (id: string): RemoveTodoAction => {
  return {
    type: ReduxActionTypes.REMOVE_TODO,
    id,
  };
};
