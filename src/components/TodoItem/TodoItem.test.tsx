import React from 'react';
import { fireEvent } from '@testing-library/react';
import TodoItem from '.';
import {
  renderWithRedux,
  initialTestingAppState,
} from '../../config/setupTests';

test('should render todo item with remove icon', () => {
  const [initialTodo] = initialTestingAppState.todos;

  const { container } = renderWithRedux(<TodoItem todo={initialTodo} />, {
    initialState: initialTestingAppState,
  });

  const todoItemText = container.querySelector('.todo-item-text');
  const todoItemTrashIcon = container.querySelector('.fa-trash');

  expect(todoItemText.innerHTML).toBe(initialTodo.text);

  expect(todoItemTrashIcon.nodeName).toBe('svg');
  expect(todoItemTrashIcon).toHaveClass('float-right');
  expect(todoItemTrashIcon).toHaveAttribute('color', '#dc3545');
});

test('should check complete todo functionality', () => {
  const [initialTodo] = initialTestingAppState.todos;

  const {
    container,
    store: { getState },
  } = renderWithRedux(<TodoItem todo={initialTodo} />, {
    initialState: initialTestingAppState,
  });

  const todoItem = container.querySelector('.todo-item');
  expect(todoItem).not.toHaveClass('completed');

  const todoItemText = container.querySelector('.todo-item-text');

  fireEvent.click(todoItemText);

  const [initialTodoFromStore] = getState().todos;

  expect(initialTodoFromStore.completed).toBeTruthy();

  fireEvent.click(todoItemText);

  expect(initialTodoFromStore.completed).toBeFalsy();
});

test('should remove todo successfully', () => {
  const [initialTodo] = initialTestingAppState.todos;

  const {
    container,
    store: { getState },
  } = renderWithRedux(<TodoItem todo={initialTodo} />, {
    initialState: initialTestingAppState,
  });

  const todoItemTrashIcon = container.querySelector('.fa-trash');

  fireEvent.click(todoItemTrashIcon);

  const todosAfterRemove = getState().todos;

  expect(todosAfterRemove).not.toContain(initialTodo);
});
