import {Component} from 'react'
import './app.css'
import '@nutui/nutui-react/dist/style.css'
import Taro from "@tarojs/taro";
class App extends Component {
  componentDidMount () {
    console.log("app-componentDidMount")
    try {
      const res = Taro.getSystemInfoSync()
      console.log(res.windowWidth)
      console.log(res.windowHeight)
      console.log(res.language)
      console.log(res.version)
      console.log(res.platform)
    } catch (e) {
      // Do something when catch error
    }
  }

  componentDidShow () {

  }

  componentDidHide () {}

  render() {
    // @ts-ignore
  return this.props.children
  }
}
export default App
