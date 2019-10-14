import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";


const styles = {};

class Selector extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            demo9: [287374],
        }
    }


    render() {
        const {classes} = this.props
        let config = [{
            checkable: true, showSearch: false, /* 显示过滤项，默认为 false*/
        }, {
            checkable: true, // 设置第二级不可选
        }, {
            checkable: true,
        }];
        let options2 = [{
            label: '常鸣—操作1',
            value: 1000,
            "disabled": true,
            children: [
                {
                    label: 'cj_test1',
                    value: 2001,
                    "disabled": true,
                    children: [
                        { "disabled": true, "label": "d", "value": 287374 }
                    ]
                }
            ]
        }, {
            label: '常鸣—操作2',
            value: 1001,
            children: [
                {
                    label: '222',
                    value: 2001,
                    disabled: true,
                    children: [
                        { "disabled": true, "label": "d2", "value": 287375 }
                    ]
                }
            ]
        }];
        return (
            <div style={{position: 'relative', margin: 15, overflow: 'hidden'}}>

            </div>
        )
    }
}

export default withStyles(styles)(Selector);
