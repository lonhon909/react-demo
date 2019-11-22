import React from 'react';

function Link(props) {
  return (
    <li
      style={{textDecoration: props.through?'line-through' : 'none'}}
      onClick={() => {props.onClick(props.index)}}
    >{props.text}</li>
  )
}

export default Link