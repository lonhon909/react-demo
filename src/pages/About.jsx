import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

function A({ match }) {
  return <div>{ match.path }</div>
}
function B({ match }) {
  return <div>{ match.path }</div>
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <>
        <NavLink to={`${this.props.match.path}/a`}>点击a</NavLink>
        <NavLink to={`${this.props.match.path}/b`}>点击b</NavLink>
        <Switch>
          <Route path={`${this.props.match.path}/a`} component={ A }></Route>
          <Route path={`${this.props.match.path}/b`} component={ B }></Route>
        </Switch>
      </>
    );
  }
}
 
export default About;