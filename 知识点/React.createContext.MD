# React.createContext

> Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props

## Context.Provider

```js
// NameContext.js
export const NameContext = React.createContext('这是默认标题');
```

```jsx
// App.jsx
import { NameContext } from './NameContext'

function App() {
  return (
    // 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效
    <NameContext.Provider value="这是传递的标题">
      标题App:
      <Son />
    </NameContext.Provider>
  )
}
```

## Class.contextType

```jsx
// Son.jsx
import Child from './Child';

function Son() {
  return (
    <>
      <p>子组件</p>
      <Child />
    </>
  )
}

export default Son;
```

```jsx
// Child.jsx
class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  // 生命周期函数内也可使用
  componentDidMount() {
    console.log(this.context)
  }
  // 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。这能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中
  static contextType = NameContext;
  render() { 
    return (
      <div>{this.context}</div>
    );
  }
}
// 也可写在类外部
// Child.contextType = NameContext

export default Child;
```

## Context.Consumer

```jsx
// 如果使用的是函数式组件，
export default function Child(props) {
  console.log(NameContext)
  return (
    <NameContext.Consumer>
      {
        (name) => (
          <div>
            {name}
          </div>
        )
      }
    </NameContext.Consumer>
  )
}
```

## useContext

```jsx
// 如果使用的是函数式组件，
export default function Child(props) {
  const { name } = useContext(NameContext)
  return (
    <div>
      {name}
    </div>
  )
}
```