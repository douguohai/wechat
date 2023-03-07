import React from "react";
import './index.css'
import {Avatar, Elevator, SearchBar} from '@nutui/nutui-react-taro';
import Taro from "@tarojs/taro";

const dataList = [
    {
        title: 'A',
        list: [
            {
                name: '安徽',
                id: 1,
            },
            {
                name: '安庆',
                id: 8,
            },
            {
                name: '安庆1',
                id: 9,
            },
            {
                name: '安庆2',
                id: 10,
            }, {
                name: '安庆3',
                id: 11,
            }, {
                name: '安庆4',
                id: 13,
            }, {
                name: '安庆5',
                id: 14,
            }, {
                name: '安庆6',
                id: 15,
            },
        ],
    },
    {
        title: 'B',
        list: [
            {
                name: '北京',
                id: 2,
            },
        ],
    },
    {
        title: 'G',
        list: [
            {
                name: '广西',
                id: 3,
            },
            {
                name: '广东',
                id: 4,
            },
        ],
    },
    {
        title: 'H',
        list: [
            {
                name: '湖南',
                id: 5,
            },
            {
                name: '湖北',
                id: 6,
            },
            {
                name: '河南',
                id: 7,
            },
        ],
    }
]


interface isState {
    tabIndex: number,
}

interface isProps {
    friendMsgHeight: number,
}

export default class Friends extends React.Component<isProps, isState> {
    constructor(props: any) {
        super(props);
        this.state = {
            tabIndex: 0
        }

    }

    onClickItem = (key: string, item: any) => {
        console.log(key, JSON.stringify(item))
    }

    onClickIndex = (key: string) => {
        console.log(key)
    }

    componentDidMount() {
        console.log("11111")
        this.getTabToTop()

    }

    getTabToTop = () => {
        const queryDom = Taro.createSelectorQuery();
        queryDom
            .select("#friendList")
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
            <div style={{display: 'flex', backgroundColor: 'red', flexDirection: 'column'}}>
                <SearchBar  placeholder="搜索" maxLength={10} align="center"/>
                <Elevator
                    id='friendList'
                    indexList={dataList}
                    height={this.props.friendMsgHeight}
                    acceptKey={"title"}
                    isSticky={true}
                    spaceHeight={30}
                    onClickItem={(key: string, item: any) => this.onClickItem(key, item)}
                    onClickIndex={(key: string) => this.onClickIndex(key)}
                >
                    <Elevator.Context.Consumer>
                        {(value) => {
                            return (
                                <>
                                    <Avatar
                                        icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
                                        shape="square"/>
                                    <span style={{marginLeft: '15px'}}>{value?.name}</span>
                                </>
                            )
                        }}
                    </Elevator.Context.Consumer>
                </Elevator>
                <div style={{backgroundColor: 'red', flex: 1}}>hah</div>
            </div>
        );
    };
}