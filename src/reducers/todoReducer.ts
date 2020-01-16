import { ID } from '../helpers/idGenerator';
import { Todo } from 'src/interfaces';
import { ReduxActionTypes } from 'src/actions';
import {
  AddTodoAction,
  ToggleTodoAction,
  RemoveTodoAction,
} from 'src/interfaces/todoActionsInterface';

type TodosReducerActions = AddTodoAction | ToggleTodoAction | RemoveTodoAction;

export const initialState: Todo[] = [
  { id: '_deihtwi9q', text: 'Build really cool todo app', completed: false },
];

export const todoReducer = (
  state = initialState,
  action: TodosReducerActions
): Todo[] => {
  switch (action.type) {
    case ReduxActionTypes.ADD_TODO: {
      const newTodo = {
        id: ID(),
        text: action.todo.text,
        completed: false,
      };

      return [...state, newTodo];
    }
    case ReduxActionTypes.REMOVE_TODO: {
      const removeIndex = state.findIndex(todo => todo.id === action.id);

      const newTodos = [...state];
      newTodos.splice(removeIndex, 1);

      return newTodos;
    }

    case ReduxActionTypes.TOGGLE_TODO: {
      const toggleIndex = state.findIndex(todo => todo.id === action.id);

      const newTodos = [...state];
      newTodos[toggleIndex].completed = !newTodos[toggleIndex].completed;

      return newTodos;
    }
    default:
      return state;
  }
};
