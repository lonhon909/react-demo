# useCallback

```js
callback() {
  // doSomething
}
// 返回一个 memoized 回调函数
const memoizedCallback = useCallback(callback, [a, b]);
```

```js
// 把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新
// index.js
import React, { useState, useCallback } from "react";

export default function App() {
  const [title, setTitle] = useState("这是一个 title");
  const [subtitle, setSubtitle] = useState("我是一个副标题");

  const callback = () => {
    setTitle("标题改变了");
  };
  // 如果不将callback缓存，每当父组件重新渲染时，子组件也会渲染（有将props---onClick）传入子组件
  const memoizedCallback = useCallback(callback, [])
  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button onClick={() => setSubtitle("副标题改变了")}>改副标题</button>
      <ChildMemo onClick={memoizedCallback} name="桃桃" />
    </div>
  );
}

function Child(props) {
  console.log('子组件重新渲染了');
  return (
    <>
      <button onClick={props.onClick}>改标题</button>
      <h1>{props.name}</h1>
    </>
  );
}

const ChildMemo = React.memo(Child);

```