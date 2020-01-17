import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithRedux } from '../../config/setupTests';
import AddTodo from '.';

test('should prevent adding empty todo', () => {
  const {
    container,
    getByPlaceholderText,
    getByText,
    store: { getState },
  } = renderWithRedux(<AddTodo />);

  const form = container.querySelector('form');
  const button = getByText('Add todo');
  const input = getByPlaceholderText('Add todo');
  expect(button).toHaveAttribute('disabled');
  expect(input).toHaveAttribute('required');

  fireEvent.submit(form);
  fireEvent.click(button);

  expect(form).toBeInvalid();

  const { todos } = getState();
  expect(todos.length).toBe(1);
});

test('should create todo successfully on form submit', () => {
  const {
    container,
    getByPlaceholderText,
    store: { getState },
  } = renderWithRedux(<AddTodo />);

  const form = container.querySelector('form');
  const input = getByPlaceholderText('Add todo');
  const newTodoText = 'New test todo';
  fireEvent.change(input, { target: { value: newTodoText } });

  fireEvent.submit(form);

  const { todos } = getState();

  expect(todos.length).toBe(2);
  expect(todos[todos.length - 1].text).toBe(newTodoText);
});

test('should create todo successfully on button click', () => {
  const {
    getByPlaceholderText,
    getByText,
    store: { getState },
  } = renderWithRedux(<AddTodo />);

  const input = getByPlaceholderText('Add todo');
  const button = getByText('Add todo');
  const newTodoText = 'New test todo';
  fireEvent.change(input, { target: { value: newTodoText } });

  fireEvent.click(button);

  const { todos } = getState();

  expect(todos.length).toBe(2);
  expect(todos[todos.length - 1].text).toBe(newTodoText);
});
