import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '标题',
      obj: {
        name: 'zhangsan'
      }
    }
    this.changeBtn = this.changeBtn.bind(this);
  }
  render() {
    console.log('render')
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={ this.changeBtn }>改变标题</button>
        <ChildMemo name={this.state.obj}/>
      </div>
    );
  }

  changeBtn() {
    this.setState({
      title: '标题改变了',
      obj: {
        name: '李四'
      }
    })
  }
}

function Child(props) {
  console.log('子组件渲染了');
  return <div>{ props.name.name }</div>
}
function areEqual(prevProps, nextProps) {
  return prevProps.name.name === nextProps.name.name;
}

const ChildMemo = React.memo(Child, areEqual);

export default App;