import { todoReducer, initialState } from './todoReducer';
import { addTodo, removeTodo, toggleTodo } from '../actions';
import { Todo } from 'src/interfaces';

test('should add todo successfully', () => {
  const newTodo = { text: 'Meet friend for lunch' };
  const newState = todoReducer(initialState, addTodo(newTodo as Todo));

  expect(newState.length).toEqual(2);
  expect(newState[1].text).toEqual(newTodo.text);
});

test('should remove todo successfully', () => {
  const newState = todoReducer(initialState, removeTodo(initialState[0].id));

  expect(newState.length).toEqual(0);
  expect(newState).not.toContain(initialState[0]);
});

test('should complete todo successfully', () => {
  const newState = todoReducer(initialState, toggleTodo(initialState[0].id));

  expect(newState[0].completed).toEqual(true);
});
