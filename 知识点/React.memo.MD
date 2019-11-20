# React.memo

> 针对函数式组件性能优化

```js
// 当父组件渲染时，子组件也会渲染，如果子组件状态没改变（props不变时），此时没必要额外的渲染，可以将子组件缓存
const MyComponent = React.memo(function MyComponent(props) {
  /* 使用 props 渲染 */
});
```

`举个🌰`
```js
// App
function App() {
  const [title, setTitle] = useState("这是一个 title")
  return (
    <div className="App">
      <h1>{ title }</h1>
      <button onClick={() => setTitle("title 已经改变")}>改名字</button>
      {/* 父组件重新渲染时，子组件没必要重新渲染 */}
      <Child name="桃桃"></Child>
    </div>
  );
}
```

```jsx
import React from "react";

function Child(props) {
  return <h1>{props.name}</h1>
}
// React.memo其实是一个高阶函数，传递一个组件进去，返回一个可以记忆的组件
export default React.memo(Child)
```

+ 默认情况下其只会对复杂对象做浅层对比

```jsx
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
        <ChildMemo data={this.state.obj} />
      </div>
    );
  }

  changeBtn() {
    this.setState({
      title: '标题改变了',
      obj: { // 注意。传递给子组件的props改变了
        name: '李四'
      }
    })
  }
}
```

```jsx
// 使用第二个参数，自定义比较判断是否需要渲染
function Child(props) {
  console.log('子组件渲染了');
  return <div>{ props.data.name }</div>
}

function areEqual(prevProps, nextProps) {
  return prevProps.data.name === nextProps.data.name;
}
// 默认情况下其只会对复杂对象做浅层对比,第二个参数自定义比较前后两个props的值，如果返回false,则不渲染
const ChildMemo = React.memo(Child, areEqual);
```