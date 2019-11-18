## react 解析 html

`dangerouslySetInnerHTML`

```jsx
// 相当于vue里面的v-html指令
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "<h1>这是一个h1标签</h1>"
    };
  }
  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.state.value }}></div>;
  }
}
```
