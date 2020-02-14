import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import QrCode from 'qrcode.react';

const styles = {
    cardWrapper: {
        width: '100%',
        margin: 'auto',
        paddingTop: '20px',
        boxSizing: 'border-box',
        backgroundColor: "rgb(250, 250, 250)"

    },
    instruction: {
        paddingLeft: '30px',
        fontSize: '16px',
    },
    qrWrapper: {
        marginTop: '30px',
        marginLeft: '24%',
        width: '50%',
    },
    ratting: {
        fontSize: '20px',
        marginTop: '20px',
        textAlign: 'center',
    },
    media: {
        height: 180,
        '& img': {}
    },
};

class QRCard extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {classes, score} = this.props;
        return (
            <div className={classes.cardWrapper}>
                <div className={classes.instruction}>请向管理人员出示 风险报告二维码</div>
                <div className={classes.qrWrapper}>
                    <QrCode size={160} value='http://www.baidu.com'/>
                </div>
                <div className={classes.ratting}>
                    <h2>风险指数:{score}</h2>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(QRCard);
