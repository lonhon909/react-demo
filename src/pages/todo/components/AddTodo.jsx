import React from 'react';

const AddTodo = function(props) {
  let input = null;
  const add = function() {
    if (!input.value.trim()) return;
    props.onClick(input.value.trim())
    input.value = '';
  }
  return (
    <> 
      <input type="text" ref={el => { input = el }}/>
      <button onClick={add}>Add</button>
    </>
  )
}

export default AddTodo