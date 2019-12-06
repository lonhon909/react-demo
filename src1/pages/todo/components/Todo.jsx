import React from 'react';
import Link from './Link';

function Todo(props) {
  return (
    <ul>
      {
        props.todos.map((item, index) => {
          return (
            <Link key={index} {...item} index={index} onClick={props.onClick}>{item.text}</Link>
          )
        })
      }
    </ul>
  )
}

export default Todo;