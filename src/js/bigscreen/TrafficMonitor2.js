import React from "react";
import 'echarts-gl';
import ReactEcharts from "echarts-for-react";

var weatherIcons = {
    'Sunny':'img/weather/sunny_128.png',
    'Cloudy': 'img/weather/cloudy_128.png',
    'Showers': 'img/weather/showers_128.png'
};

const option = {
    // color: 'white',
    title: {
        text: '各大洲营收统计',
        left: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['西凉', '益州', '兖州', '荆州', '幽州']
    },
    series: [
        {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
                {
                    value: 1548,
                    name: '北美洲',
                    label: {
                        formatter: [
                            '{title|{b}}{abg|}',
                            // '  {weatherHead|收入}{valueHead|收入}{rateHead|占比}',
                            '  {valueHead|收入}{rateHead|占比}',
                            '{hr|}',
                            '  {value|202}{rate|55.3%}',
                            '  {value|142}{rate|38.9%}',
                            '  {value|21}{rate|5.8%}'
                        ].join('\n'),
                        backgroundColor: '#eee',
                        borderColor: '#777',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            title: {
                                color: '#eee',
                                align: 'center'
                            },
                            abg: {
                                backgroundColor: '#333',
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            Sunny: {
                                height: 30,
                                align: 'left',
                                backgroundColor: {
                                    image: weatherIcons.Sunny
                                }
                            },
                            Cloudy: {
                                height: 30,
                                align: 'left',
                                backgroundColor: {
                                    image: weatherIcons.Cloudy
                                }
                            },
                            Showers: {
                                height: 30,
                                align: 'left',
                                backgroundColor: {
                                    image: weatherIcons.Showers
                                }
                            },
                            weatherHead: {
                                color: '#333',
                                height: 24,
                                align: 'left'
                            },
                            hr: {
                                borderColor: '#777',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            value: {
                                width: 20,
                                height: 15,
                                padding: [0, 20, 0, 30],
                                align: 'left'
                            },
                            valueHead: {
                                color: '#333',
                                width: 20,
                                height: 15,
                                padding: [0, 20, 0, 30],
                                align: 'center'
                            },
                            rate: {
                                width: 40,
                                align: 'right',
                                padding: [0, 10, 0, 0]
                            },
                            rateHead: {
                                color: '#333',
                                width: 40,
                                align: 'center',
                                padding: [0, 10, 0, 0]
                            }
                        }
                    }
                },
                {value: 535, name: '非洲'},
                {value: 510, name: '南美洲'},
                {value: 634, name: '亚洲'},
                {value: 735, name: '欧洲'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


class TrafficMonitor2 extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.echartsRef = React.createRef();
    }


    render() {
        return (
            <ReactEcharts
                // opts={{renderer: 'svg'}}
                style={{height: '100%'}} ref={this.echartsRef} option={option}/>
        )
    }
}

export default TrafficMonitor2
