import React from 'react';
import TodoList from '.';
import { renderWithRedux } from '../../config/setupTests';

test('should display todos correctly', () => {
  const { container } = renderWithRedux(<TodoList />);
  const todoList = container.querySelectorAll('.todo-item');

  expect(todoList.length).toBe(1);
});

test('should render todos correctly', () => {
  const { asFragment } = renderWithRedux(<TodoList />);

  expect(asFragment()).toMatchSnapshot();
});
