import React from 'react';

const Filter = function(props) {
  return (
    <div>
      show:
      <span onClick={() => {props.onClick(0)}}>All</span>&nbsp;&nbsp;
      <span onClick={() => {props.onClick(-1)}}>through</span>&nbsp;&nbsp;
      <span onClick={() => {props.onClick(1)}}>no-through</span>&nbsp;&nbsp;
    </div>
  )
}

export default Filter;