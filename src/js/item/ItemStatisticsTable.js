import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {bloodStatistics} from '../MockData';

const styles = {
    isWrapper: {
        fontSize: '1.6rem',
        margin: '1.6rem',
        paddingBottom: '3rem',
        borderBottom: 'solid 1px rgb(214, 217, 217)',
        '& p': {
            fontSize: '1.8rem'
        }

    },
    isTableRoot: {
        width: '1080px',
        fontSize: '1.5rem',
        border: 'solid 1px rgb(234, 237, 237)',
        '& tr': {
            '& :first-child': {
                fontWeight: 'bold',
            }
        },
        '& th': {
            padding: '0.2rem 1rem',
        },
        '& td, th': {
            minWidth: '12rem',
            boxSizing: 'border-box',
            border: 'solid 0.5px rgb(234, 237, 237)',
            textAlign: 'center',
        },
        firstColBold: {
            fontStyle: 'bold',
        }
    },
};

class ItemStatisticsTable extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.isWrapper}>
                <p>统计学特征</p>
                <table className={classes.isTableRoot}>
                    <thead>
                    <col className={classes.firstColBold}/>
                    <tr>
                        <th rowSpan={2}>统计项</th>
                        <th rowSpan={2}>最小值</th>
                        <th rowSpan={2}>最大值</th>
                        <th rowSpan={2}>平均值</th>
                        <th rowSpan={2}>标准差</th>
                        <th colSpan={4}>分布区间</th>
                    </tr>
                    <tr>
                        <th>0~25%</th>
                        <th>26%~50%</th>
                        <th>51~75%</th>
                        <th>76~100%</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bloodStatistics.map(row => <tr>
                        {row.map(cell => <td>
                            {cell}
                        </td>)}
                    </tr>)}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default withStyles(styles)(ItemStatisticsTable)
