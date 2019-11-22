import React from 'react';
import AddTodoContainer from './pages/todo/containers/AddTodoContainer';
import FilterContainer from './pages/todo/containers/FilterContainer';
import TodoContainer from './pages/todo/containers/TodoContainer';

const App = () => {
  return (
    <>
      <AddTodoContainer />
      <TodoContainer />
      <FilterContainer />
    </>
  )
}

export default App
