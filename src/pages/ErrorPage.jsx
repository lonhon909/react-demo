import React, { Component } from 'react';

function OO() {
  return <div>121321312312</div>
}

class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <h2>ErrorPage： {this.props.match.path}
        222: <OO />
      </h2>
    );
  }
}
 
export default ErrorPage;
