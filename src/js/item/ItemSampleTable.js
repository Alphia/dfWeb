import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {sampleModel} from '../MockData';

const styles = {
    sampleTableRoot: {
        fontSize: '1.6rem',
        margin: '1.6rem',
        paddingBottom: '3rem',
        borderBottom: 'solid 1px rgb(214, 217, 217)',
        '& p': {
            fontSize: '1.8rem'
        }
    },
    sampleWrapper: {
        overflowX: 'scroll',
    },
    isTableRoot: {
        width:'1080px',
        fontSize: '1.5rem',
        border: 'solid 1px rgb(234, 237, 237)',
        '& td, th': {
            minWidth: '12rem',
            boxSizing: 'border-box',
            border: 'solid 0.5px rgb(234, 237, 237)',
            textAlign: 'center',
        },
    },
};

class ItemSampleTable extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.sampleTableRoot}>
                <p>抽样数据</p>
                <div className={classes.sampleWrapper}>
                    <table className={classes.isTableRoot}>
                        <thead>
                        <tr>
                            {sampleModel.headers.map(header => <th>
                                {header}
                            </th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {sampleModel.data.map(row => <tr>
                            {row.map(cell => <td>{cell}</td>)}
                        </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ItemSampleTable)
