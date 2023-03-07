import React, {Component, PropsWithChildren} from "react";
import './index.css'
import {Avatar, Col, Row, SearchBar, VirtualList} from '@nutui/nutui-react-taro';
import {View} from "@tarojs/components";
import Taro from "@tarojs/taro";


interface isState {
    sourceData: string [],
    pageNo: 0,
    isLoading: false,
    tabIndex: number,
}

class MsgLsit extends Component<PropsWithChildren, isState> {
    constructor(props: any) {
        super(props);
        this.state = {
            sourceData: ["1", "2", "3", "4"],
            pageNo: 0,
            isLoading: false,
            tabIndex: 0
        };
    }

    handleChange = (event: any) => {
        this.setState({pageNo: event.target.value});
    };

    ItemRender = ({data}: any) => {
        console.log(data)
        return <View style={{paddingLeft: 10, flex: 'display'}}
                     onClick={() => Taro.navigateTo({url: '/pages/chat/index'})}>
            <Row>
                <Col span="4">
                    <Avatar
                        icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
                        shape="square"/>
                </Col>
                <Col span="20">
                    <Row type="flex" justify="space-between">
                        <div style={{fontSize: 20}}>zhangsan</div>
                        <div style={{paddingRight: 10}}>昨天 20:21</div>
                    </Row>
                    <div>14</div>
                </Col>
            </Row>

        </View>
    }


    render() {
        return (
            <div>
                <SearchBar placeholder="搜索" maxLength={10} align="center"/>
                <VirtualList
                    itemSize={50}
                    sourceData={this.state.sourceData}
                    ItemRender={this.ItemRender}
                    onScroll={this.handleChange}
                />
            </div>

        );
    }
}

export default MsgLsit
