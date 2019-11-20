# useState

> 什么是 Hook

> Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用 —— 这使得你不使用 class 也能使用 React

```js
// 函数式组件拥有自己的状态
function Child(props) {
  const [title, setTitle] = useState('开始');
  return (
    <>
      <div>{ props.name + title }</div>
      <button onClick={ () => setTitle('结束' + Math.random()) }>修改</button>
    </>
  )
}
```