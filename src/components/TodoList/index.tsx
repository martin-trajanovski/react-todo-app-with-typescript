import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem';
import { Todo } from 'src/interfaces';
import { AppState } from 'src/reducers';

const TodoList: React.FC = () => {
  const todos = useSelector((state: AppState) => state.todos);

  return (
    <div className="todo-list">
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
