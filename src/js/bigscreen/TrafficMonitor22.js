import React from "react";
import ReactEcharts from "echarts-for-react";

const option = {
        legend: {
            textStyle: {
                color: '#cccccc',
                fontSize: 16
            },
        },
        tooltip: {},
        dataset: {
            source: [
                ['product', '2015', '2016', '2017'],
                ['Matcha Latte', 43.3, 85.8, 93.7],
                ['Milk Tea', 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 86.4, 65.2, 82.5],
                ['Walnut Brownie', 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {
            type: 'category',
            nameTextStyle: {
                color: '#169ea8',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: '#169ea8'
                }
            },
        },
        yAxis: {
            nameTextStyle: {
                color: '#169ea8',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: '#169ea8'
                }
            },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}
        ]
    }
;


class TrafficMonitor22 extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.echartsRef = React.createRef();
    }

    render() {
        return (
            <ReactEcharts style={{height: '100%'}} ref={this.echartsRef} option={option}/>
        )
    }
}

export default TrafficMonitor22
