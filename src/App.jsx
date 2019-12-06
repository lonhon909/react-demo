import React from 'react';
import Child from './Child';

export const TitleContext = React.createContext({
  title: '默认标题'
})

export default function App() {
  return (
    <TitleContext.Provider value={{ title: '实际标题' }}>
      <Child />
    </TitleContext.Provider>
  )
}