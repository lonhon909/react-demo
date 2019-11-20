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
  const base = useMemo(expensiveFn, [])

  return (
    <div className="App">
      <h1>count：{num}</h1>
      <button onClick={() => setNum(num + base)}>+1</button>
    </div>
  );
}
