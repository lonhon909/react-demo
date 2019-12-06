import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Checkerboard from './components/Checkerboard';
import './app.scss'

function App() {
  return (
    <div className="app">
      <div className="left">
        <Checkerboard />
      </div>
      <div className="right">right</div>
    </div>
  )
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)