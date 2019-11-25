import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {itemModelList} from "../MockData";

const styles = {
    summary: {
        boxSizing: 'border-box',
        margin: '2rem 1.6rem',
        borderBottom: 'solid 1px rgb(214, 217, 217)',
        paddingBottom: '2rem',
        fontSize: '1.8rem',
    },

    content: {
        display: 'flex',
        margin: '1.4rem auto',
        width: '1080px',
        '& div': {
            padding: '0rem 3rem 0rem 0rem',
            width: '22%',
        },
        '& p': {
            fontSize: '1.6rem',
            margin: '0',
        },
    }
};

class ItemDescription extends React.Component {
    render() {
        const {classes} = this.props;
        const descModel = itemModelList[0];
        return (
            <div className={classes.summary}>
                <p>详细规格</p>
                <div className={classes.content}>
                    <div>
                        <p>来源：{descModel.publisher}</p>
                        <p>科室：{descModel.department}</p>
                        <p>病症：{descModel.symptom}</p>

                        <p>类型：{descModel.dataType}</p>
                    </div>
                    <div>
                        <p>数量：{descModel.amount}</p>
                        <p>格式：{descModel.format}</p>
                        <p>大小：{descModel.size}</p>
                        <p>最近一月购买次数：{descModel.latestMonthSold}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ItemDescription);
