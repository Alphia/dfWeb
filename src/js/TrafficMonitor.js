import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import ReactEcharts from "echarts-for-react";

const styles = {
    trafficRoot: {
        marginTop: '2rem',
    },
};

let dataX = [];
let dataY = [];

const getTraffic = () => {
    return Math.round(Math.random() * 200)
};

const initiateData = (time) => {
    let startFrom = new Date(new Date().getTime() - 100 * 2 * 1000);
    for (let i = 0; i < 100; i++) {
        dataX.push(new Date(startFrom.getTime() + i * 2 * 1000).toLocaleTimeString().replace(/^\D*/, ''));
        dataY.push(getTraffic());
    }
};

const generateOption = () => {
    return {
        title: {
            text: '实时流量监控',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            splitNumber: 10,
            splitLine: {
                show: false
            },
            data: dataX
        },
        dataZoom: [{
            type: 'inside',
            start: 80,
            end: 100
        },
            {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value} MB'
            },
        },
        series: [{
            name: '数据流量',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: dataY
        }]
    };
};

class TrafficMonitor extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.echartsRef = React.createRef();
        initiateData();
        this.state = {
            option: generateOption()
        }
    }

    shift = () => {
        dataX.shift();
        dataY.shift();
        dataX.push(new Date().toLocaleTimeString().replace(/^\D*/, ''));
        dataY.push(getTraffic());
        let newOpt = generateOption();
        this.echartsRef.current.getEchartsInstance().setOption(newOpt)
    };

    componentDidMount() {
        this.shiftInterval = setInterval(() => this.shift(), 2000)
        console.log('data3', this.state.option);
    }

    componentWillUnmount() {
        clearInterval(this.shiftInterval);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.trafficRoot}>
                <ReactEcharts style={{height: '600px'}} ref={this.echartsRef} option={this.state.option}/>
            </div>
        )
    }
}

export default withStyles(styles)(TrafficMonitor)
