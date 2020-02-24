import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {config} from "./config";
import {withRouter} from "react-router";
import _ from 'underscore';

const styles = {
    cardWrapper: {
        width: '100%',
        margin: 'auto',
        paddingTop: '20px',
        boxSizing: 'border-box',
    },
    red: {
        backgroundColor: "rgb(250,125,101)",
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    green: {
        backgroundColor: "rgb(42,250,107)",
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    blue: {
        backgroundColor: "rgb(9,192,250)",
        paddingTop: '20px',
        paddingBottom: '20px',
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
    p:{
        marginTop: '30px',
        textAlign: 'center',
        fontSize: '20px',
    }
};

class QRCard extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        // let scoreUrl = config.heServerUrl + config.recordPath + '?pid=' + this.props.patient.pid;
    }

    calculateColor = q => {
        if (q["hasTraveledWuhan"] === "是" ||
            q["hasTouchedNCov"] === "是" ||
            q["hasTouchedPotentialNCov"] === "是" ||
            q["isNearToPotentialNCov"] === "是") {
            return 'red';
        }

        let symptom = _(q['symptom']);
        if (symptom.contains("发热") ||
            symptom.contains("咳嗽") ||
            symptom.contains("乏力") ||
            symptom.contains("鼻塞") ||
            symptom.contains("流涕") ||
            symptom.contains("咽痛") ||
            symptom.contains("肌痛") ||
            symptom.contains("呼吸困难") ||
            symptom.contains("腹泻")
        ) {
            return 'blue';
        }
        return 'green'
    };

    render() {
        const {classes} = this.props;
        const q = this.props.location.state.questionnaire;
        const color = this.calculateColor(q);
        return (
            <div className={classes.cardWrapper}>
                <div className={classes[color]}>
                    {/*<div className={classes.instruction}>请向管理人员出示 患者承诺书报告二维码</div>*/}
                    {/*<div className={classes.qrWrapper}>*/}
                    {/*    <QrCode size={160} value={config.heFrontUrl + 'report?pid=' + patient.pid}/>*/}
                    {/*</div>*/}
                    <div className={classes.ratting}>
                        <h3>姓名：{q.name}</h3>
                        <h3>身份证：{q.pid}</h3>
                    </div>
                    <p className={classes.p}>
                        {color === 'green' ? "谢谢您的配合！" : "请联系医院工作人员做下一步咨询。"}
                    </p>

                </div>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(QRCard));
