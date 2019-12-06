import { connect } from 'react-redux';

import Todo from '../components/Todo';
import { setThrough } from '../actions';

function getVisibleTodos(todos, filter) {
  switch(filter) {
    case 0:
      return todos
    case -1:
      return todos.filter(item => item.through)
    case 1:
      return todos.filter(item => !item.through)
    default:
      return []
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.filter)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (index) => {
      dispatch(setThrough(index))
    }
  }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default TodoContainer