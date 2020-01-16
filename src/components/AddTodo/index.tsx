import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'src/actions';
import { Todo } from 'src/interfaces';

const AddTodo: React.FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!value) {
      return;
    }

    const newTodo = {
      text: value,
      completed: false,
    };

    dispatch(addTodo(newTodo as Todo));

    setValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add todo"
            aria-label="Add todo"
            aria-describedby="basic-addon2"
            value={value}
            onChange={handleChange}
            required
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-outline-primary"
              disabled={!value}
            >
              Add todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
