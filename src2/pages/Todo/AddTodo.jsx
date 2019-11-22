import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions';

const AddTodo = function(props) {
  const { dispatch } = props;
  let input = null;
  const onSubmit = e => {
    e.preventDefault();
    if (!input.value.trim()) return;
    dispatch(addTodo(input.value));
    input.value = '';
  }
  return (
    <div>
      <form
        onSubmit={
          e => onSubmit(e)
        }  
      >
        <input
          type="text"
          ref={el => {
            input = el
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo;