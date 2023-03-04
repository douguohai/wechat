import {Component} from 'react'
import './app.css'
import '@nutui/nutui-react/dist/style.css'
class App extends Component {
  componentDidMount () {
    console.log("app-componentDidMount")
  }

  componentDidShow () {}

  componentDidHide () {}

  render() {
    // @ts-ignore
  return this.props.children
  }
}
export default App
