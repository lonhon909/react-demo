import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = (props) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          // props.dispatch(addTodo(input.value))
          props.onClick(input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (value) => {
      dispatch(addTodo(value))
    }
  }
}

AddTodo = connect(undefined, mapDispatchToProps)(AddTodo)

export default AddTodo