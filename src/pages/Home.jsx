import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.jump = this.jump.bind(this);
  }
  jump() {
    const { push, replace } = this.props.history;
    // push('/about/b');
    replace('/about/b')
  }
  render() { 
    return (
      <div>
				<NavLink
					to='/'
					className=""
          activeClassName="activeClassName"
        >
          首页
				</NavLink>
				<NavLink to='/about' className="">
					关于
				</NavLink>
        <a href="/about">关于2</a>
        <button onClick={this.jump}>点击</button>
			</div>
    );
  }
}
 
export default Home;