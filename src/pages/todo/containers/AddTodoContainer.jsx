import { connect } from 'react-redux';
import { addTypes } from '../actions';
import AddTodo from '../components/AddTodo';

function mapDispatchtoProps(dispatch) {
  return {
    onClick: value => {
      dispatch(addTypes(value))
    }
  }
}

const AddTodoContainer = connect(null, mapDispatchtoProps)(AddTodo);

export default AddTodoContainer
