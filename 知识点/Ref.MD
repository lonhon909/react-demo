## Refs

> Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素

### 1、回调形式的 refs(`推荐使用`)

`相比 字符串模式 更加灵活，也避免了诸多问题`
- 可以优雅在组件销毁时回收变量, `ref`中的回调函数会在对应的普通组件`componentDidMount`，`componentDidUpdate`之前; 或者`componentWillUnmount`之后执行，`componentWillUnmount`之后执行时，`callback`接收到的参数是`null`  

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // ref
    this.input = null;
    this.el = null;
    this.elDiv = div => {
      this.el = div;
    };
  }

  render() {
    return (
      <div>
        <input type="text" ref={el => (this.input = el)} />
        <div ref={this.elDiv} />
      </div>
    );
  }
}
```

### 2、String 类型的 Refs(`过时 API`)

```jsx
// 16.4.1更新后，明确说了该种方法的Refs存在问题，
// 过时的API，推荐使用回调refs
class App extends Component {
  componentDidMount() {
    this.refs.myinput.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref="myinput" />
      </div>
    );
  }
}
```

### 3、React.createRef()

`ref的值取决于节点的类型:`

- 当 ref 属性被用于一个普通的 HTML 元素时，React.createRef() 将接收底层 DOM 元素作为它的 current 属性以创建 ref 。
- 当 ref 属性被用于一个自定义类组件时，ref 对象将接收该组件已挂载的实例作为它的 current 。
- 你不能在函数式组件上使用 ref 属性，因为它们没有实例。

```jsx
class Test extends React.Component {
  myRef = React.createRef();
  componentDidMount() {
    // 访问ref
    const dom = this.myRef.current;
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```
