import React, {PropsWithChildren} from "react";
import './index.css'
import {Elevator, Icon, SearchBar} from '@nutui/nutui-react-taro';
import {ScrollView} from "@tarojs/components";

const dataList = [
    {
        title_1: 'A',
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
        title_1: 'B',
        list: [
            {
                name: '北京',
                id: 2,
            },
        ],
    },
    {
        title_1: 'G',
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
        title_1: 'H',
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

export default class Friends extends React.Component<PropsWithChildren, isState> {
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

    render() {
        return (
            <div>
                <SearchBar placeholder="搜索" maxLength={10} align="center"/>
                <ScrollView style={{display: 'flex', flex: 1}}>
                    <Elevator
                        indexList={dataList}
                        height="500"
                        acceptKey={"title_1"}
                        // isSticky={true}
                        onClickItem={(key: string, item: any) => this.onClickItem(key, item)}
                        onClickIndex={(key: string) => this.onClickIndex(key)}
                    >
                        <Elevator.Context.Consumer>
                            {(value) => {
                                return (
                                    <>
                                        <Icon name="people" size={20}></Icon>
                                        <span style={{marginLeft: '15px'}}>{value?.name}</span>
                                    </>
                                )
                            }}
                        </Elevator.Context.Consumer>
                    </Elevator>
                </ScrollView>
            </div>
        );
    }
}