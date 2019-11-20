# useMemo

> useMemo 做计算结果缓存

```js
// 返回一个 memoized 值
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
// useMemo 的第一个参数就是一个函数，这个函数返回的值会被缓存起来，同时这个值会作为 useMemo 的返回值，第二个参数是一个数组依赖，如果数组里面的值有变化，那么就会重新去执行第一个参数里面的函数，并将函数返回的值缓存起来并作为 useMemo 的返回值 。
```

```js
import React, { useState, useMemo } from 'react';

export default function App() {
  const [num, setNum] = useState(0);

  // 一个非常耗时的一个计算函数
  // result 最后返回的值是 49995000
  function expensiveFn() {
    let result = 0;
    
    for (let i = 0; i < 10000; i++) {
      result += i;
    }
    
    console.log('我重新计算了') // 49995000
    return result;
  }

  // const base = expensiveFn();
  // 将函数执行结果缓存，这样只要依赖项不变，渲染时就会使用缓存结果，不会执行函数
  const base = useMemo(expensiveFn, [])

  return (
    <div className="App">
      <h1>count：{num}</h1>
      <button onClick={() => setNum(num + base)}>+1</button>
    </div>
  );
}

```