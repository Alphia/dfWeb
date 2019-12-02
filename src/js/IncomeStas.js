import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import ReactEcharts from "echarts-for-react";

const generateData = () => {

    const firstDay = +new Date(2019, 9, 3);
    const today = new Date();
    const oneDay = 24 * 3600 * 1000;
    const days = (today - firstDay) / oneDay;
    const hours = Array(23).fill(null).map((_, h) => h + 1);

    let base = new Date(2019, 9, 3);

    let data = [];
    let date = [];

    for (let day = 1; day < days; day++) {
        const now = new Date(base.getTime() + day * oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        // hours.map(_=>date.push(_));

        data.push(Math.round((Math.random()) * 1000));
        // hours.map(_=>data.push(Math.round((Math.random()) * 300)));
    }
    return {date: date, data: data}
};

const data = generateData();

const styles = {
    incomeRoot: {
        marginTop: '2rem',
    },
    incomeTableRoot: {
        margin: '3rem auto',
        '& td, th': {
            minWidth: '12rem',
            boxSizing: 'border-box',
            border: 'solid 0.5px rgb(234, 237, 237)',
            textAlign: 'center',
        },
    },
    incomeP: {
        margin: '3rem',
        fontSize: '1.7rem'
    }
};

const option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },

    title: {
        left: 'center',
        text: '历史收入数据',
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            }
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.date
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        axisLabel: {
            formatter: '{value} 元'
        }
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 20
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
    series: [
        {
            name: '数据流量',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            data: data.data,
        }
    ]
};

const income = {
    headers: ['月份', '最小值(元)', '最大值(元)', '平均值(元)', '单月合计(元)'],
    data: [
        [10, 211, 1200, 562.5, 31 * 562.5],
        [11, 211, 1200, 562.5, 31 * 562.5],
        [12, 211, 1200, 562.5, 31 * 562.5],
    ]
}

class IncomeStas extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.incomeRoot}>
                <ReactEcharts style={{height: '600px', fontSize: '1.5rem'}} option={option}/>
                <p className={classes.incomeP}>各月份收入统计：</p>
                <table className={classes.incomeTableRoot}>
                    <thead>
                    <tr>
                        {income.headers.map(header => <th>
                            {header}
                        </th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {income.data.map(row => <tr>
                        {row.map(cell => <td>{cell}</td>)}
                    </tr>)}

                    </tbody>
                </table>
            </div>

        )
    }
}

export default withStyles(styles)(IncomeStas)
