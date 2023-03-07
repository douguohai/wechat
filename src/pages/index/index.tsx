import React, {Component, PropsWithChildren} from "react";
import './index.css'
import {Tabbar, TabbarItem} from '@nutui/nutui-react-taro';
import Friends from "./components/friends/index";
import MsgList from "./components/msglist/index";
import My from "./components/my/index";
import {View} from "@tarojs/components";
import Taro from "@tarojs/taro";


interface isState {
    tabIndex: number,
    component: any,
    friend_msg_height: number,
}

class Index extends Component<PropsWithChildren, isState> {
    constructor(props: any) {
        super(props);
        this.state = {
            tabIndex: 0,
            component: <View/>,
            friend_msg_height: 0
        };
    }

    componentWillMount() {
        this._switchTab(0)
        // this.getTabToTop()
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
                    component: <Friends friendMsgHeight={this.state.friend_msg_height}/>
                }, () => {
                    // this.getTabToTop()
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


    // 获取tab距离顶部的高度值
    getTabToTop = () => {
        const queryDom = Taro.createSelectorQuery();
        queryDom
            .select("#page")
            .boundingClientRect((rec) => {
                console.log(rec)
                if (!rec?.top) {
                    setTimeout(() => {
                        console.log("again")
                        this.getTabToTop();
                    }, 200);
                } else {
                    // this.setState({
                    //     friend_msg_height: rec.height + rec.bottom
                    // })
                    return
                }
            })
            .exec();
    }



    render() {
        return (
            <div id="page">
                {this.state.component}
                <Tabbar  bottom visible={this.state.tabIndex} safeAreaInsetBottom={true} onSwitch={(_child, idx) => {
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
