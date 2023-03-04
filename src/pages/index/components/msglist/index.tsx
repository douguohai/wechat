import React, {Component, PropsWithChildren} from "react";
import './index.css'
import {SearchBar, VirtualList} from '@nutui/nutui-react-taro';


interface isState {
    sourceData: string [],
    pageNo: 0,
    isLoading: false,
    tabIndex: number,
}

const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50px',
    background: '#fff',
    borderRadius: '10px',
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
        return <div style={itemStyle}>{data}</div>
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
