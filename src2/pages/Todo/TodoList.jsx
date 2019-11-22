import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = function(props) {
  const { todos, onTodoClick } = props;
  return (
    <ul>
      {
        todos.map((item, index) => {
          return <Todo key={index} {...item} onClick={() => onTodoClick(index)}></Todo>
        })
      }
    </ul>
  )
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
}

export default TodoList;