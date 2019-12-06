# State 的更新可能是异步的

> 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。

```js
// ⚠️❌❎错误写法
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

```js
// ✔️正确
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
})
```