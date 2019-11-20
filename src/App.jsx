import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
  }
  componentDidMount() {
    console.log('componentDidMount')
    setTimeout(() => {
      this.setState({
        num: this.state.num + 1
      })
    }, 5000)
  }
  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  render() {
    console.log('render')
    return (
      <div>{ this.state.num }</div>
    );
  }
}
 
export default App;