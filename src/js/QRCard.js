import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
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
        const {classes} = this.props;
        let model = {
            content: {
                title: 'hahah',
                introduction: 'xixi',
            }
        }
        return (
            <div className={classes.cardWrapper}>
                <div className={classes.instruction}>请向管理人员出示 风险报告二维码</div>
                <div className={classes.qrWrapper}>
                    <QrCode size={160} value='http://www.baidu.com'/>
                </div>
                <div className={classes.ratting}>
                    <h2>风险指数:高</h2>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(QRCard);
