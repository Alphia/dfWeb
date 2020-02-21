import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import QrCode from 'qrcode.react';
import axios from "axios";
import {config} from "./config";
import {UserStore} from "./Constant";
import status from "http-status";

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
        margin: 'auto',
        width: '160px',
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
        this.state = {
            scoreData: {}
        }
    }

    componentDidMount() {
        let scoreUrl = config.heServerUrl + config.evaluationPath + '?nick=' + UserStore.user.nick;
        console.log('scoreurl: ', scoreUrl);
        axios.get(scoreUrl)
            .then(res => {
                if (res.status === status.OK) {
                    console.log('读score...', res.data);
                    this.setState({scoreData: res.data})
                }
            })
    }

    render() {
        const {classes} = this.props;
        const scoreData = this.state.scoreData;
        return (
            <div className={classes.cardWrapper}>
                <div className={classes.instruction}>请向管理人员出示 患者承诺书报告二维码</div>
                <div className={classes.qrWrapper}>
                    <QrCode size={160} value={config.heFrontUrl + 'report?pid=' + UserStore.user.pid}/>
                </div>
                <div className={classes.ratting}>
                    <h3>姓名：{scoreData.name}</h3>
                    <h3>身份证：{scoreData.pid}</h3>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(QRCard);
