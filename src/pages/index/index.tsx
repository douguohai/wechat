import React, {Component, PropsWithChildren} from "react";
import './index.css'
import {Tabbar, TabbarItem} from '@nutui/nutui-react-taro';
import Friends from "./components/friends/index";
import MsgList from "./components/msglist/index";
import My from "./components/my/index";
import {View} from "@tarojs/components";


interface isState {
    tabIndex: number,
    component: any
}

class Index extends Component<PropsWithChildren, isState> {
    constructor(props: any) {
        super(props);
        this.state = {
            tabIndex: 0,
            component: <View/>
        };
    }

    componentWillMount() {
        this._switchTab(0)
    }

    onShow() {

    }

    _switchTab(value: number) {
        console.log(value)
        switch (value) {
            case 0:
                console.log(value)
                this.setState({
                    tabIndex: 0,
                    component: <MsgList/>
                })
                return
            case 1:
                console.log(value)
                this.setState({
                    tabIndex: 1,
                    component: <Friends/>
                })
                return
            case 2:
                console.log(value)
                this.setState({
                    tabIndex: 2,
                    component: <My/>
                })
                return
        }
    }


    render() {
        return (
            <div>
                {this.state.component}
                <Tabbar bottom visible={this.state.tabIndex} safeAreaInsetBottom={true} onSwitch={(_child, idx) => {
                    this._switchTab(idx)
                }}>
                    <TabbarItem tabTitle="微信" icon="home" num="110"/>
                    <TabbarItem tabTitle="通讯录" icon="category" dot={true}/>
                    <TabbarItem tabTitle="我" icon="my"/>
                </Tabbar>
            </div>

        );
    }
}

export default Index
