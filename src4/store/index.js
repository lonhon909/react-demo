import { createStore } from 'redux';
import reducers from './reducers';
import { Sudoku } from '../common/utils';

const store = createStore(reducers, {
  sudoku: new Sudoku()
});

export default store;
