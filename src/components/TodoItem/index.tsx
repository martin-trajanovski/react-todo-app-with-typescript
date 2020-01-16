import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../../actions';
import { Todo } from 'src/interfaces';
import './TodoItem.scss';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const todoClass = todo.completed ? 'completed' : '';
  const dispatch = useDispatch();

  const handleToggleClick = (): void => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemoveClick = (): void => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className={`todo-item ${todoClass}`}>
      <span className="todo-item-text" onClick={handleToggleClick}>
        {todo.text}
      </span>
      <FontAwesomeIcon
        className="float-right"
        color="#dc3545"
        icon="trash"
        onClick={handleRemoveClick}
      />
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
