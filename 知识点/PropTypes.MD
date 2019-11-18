# 使用 PropTypes 进行类型检查

`自 React v15.5 起，React.PropTypes 已移入另一个包中。请使用 prop-types 库 代替`

<a href="https://react.docschina.org/docs/typechecking-with-proptypes.html">使用 PropTypes 进行类型检查</a>

```jsx
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
  item: PropTypes.string.isRequired,
  // 一个 React 元素。
  optionalElement: PropTypes.element,
  // 你也可以声明 prop 为类的实例，这里使用
  // JS 的 instanceof 操作符。
  optionalMessage: PropTypes.instanceOf(Message),
  // 你可以让你的 prop 只能是特定的值，指定它为
  // 枚举类型。
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),
  // 你可以在任何 PropTypes 属性后面加上 `isRequired` ，确保
  // 这个 prop 没有被提供时，会打印警告信息。
  requiredFunc: PropTypes.func.isRequired,
  // 你可以指定一个自定义验证器。它在验证失败时应返回一个 Error 对象。
  // 请不要使用 `console.warn` 或抛出异常，因为这在 `onOfType` 中不会起作用。
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },
};
```

## 默认 Prop 值

```jsx
// defaultProps 用于确保 this.props.name 在父组件没有指定其值时，有一个默认值。propTypes 类型检查发生在 defaultProps 赋值后，所以类型检查也适用于 defaultProps。

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// 指定 props 的默认值：
Greeting.defaultProps = {
  name: 'Stranger'
};
```