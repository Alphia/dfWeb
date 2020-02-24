import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import {questions} from './questionnaireConstants';
import axios from 'axios';
import QRCard from "./QRCard";
import {config} from './config';
import {Route, Switch, withRouter} from "react-router";
import {withStyles, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel} from "@material-ui/core";
import status from 'http-status';
import Report from "./Report";
import ConfirmationPage from "./ConfirmationPage";

const styles = {
    header: {
        textAlign: 'center',
    },
    instruction: {
        textAlign: 'left',
        whiteSpace: 'pre-wrap',
        fontSize: '16px',
        margin: 4,
    },
    tip: {
        textAlign: 'left',
        whiteSpace: 'pre-wrap',
        fontSize: '14px',
        marginTop: '10px',
    },
    surveyWrapper: {
        marginTop: '20px',
    },
};

class Main extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            patient: {},
        }
    }

    extractPayload = data => {
        let payload = data;
        if (payload.hasTraveledWuhan === 'other') {
            payload.hasTraveledWuhan = '是';
            payload.wuhanSites = payload['hasTraveledWuhan-Comment'];
            delete payload['hasTraveledWuhan-Comment'];
        }
        if (payload.hasTraveledOtherSites === 'other') {
            payload.hasTraveledOtherSites = '是';
            payload.otherSites = payload['hasTraveledOtherSites-Comment'];
            delete payload['hasTraveledOtherSites-Comment'];
        }
        return payload;
    };

    onComplete = (result) => {
        let payload = this.extractPayload(result.data);
        this.setState({patient: {pid: payload.pid, name: payload.name}});
        axios.post(config.heServerUrl + config.recordPath, payload).then(res => {
            console.log('submit record with status and data:', res.status, res.data);
            if (res.status === status.OK) {
                this.props.history.push('/qr', {survey: payload});
            }
        })
    };

    render() {
        let model = new Survey.Model(questions);
        const {classes} = this.props;
        return (
            <Switch>
                <Route path="/confirmation">
                    <ConfirmationPage/>
                </Route>
                <Route path="/survey">
                    <h1 className={classes.header}>流行病学调研门诊患者承诺书</h1>
                    <p className={classes.tip}><b>*重要提示:请您谨慎如实填写以下信息，并确保所填信息准确无误，一旦提交后不能修改!</b></p>
                    <div className={classes.surveyWrapper}>
                        <Survey.Survey
                            model={model}
                            onCompleting={this.onComplete}
                            completeText={'提交'}
                            showCompletedPage={false}
                            // completedHtml={'<h1>提交成功，谢谢！</h1><h3>请在患者承诺报告里查看详情</h3><p>3秒后跳转</p>'}
                            onValueChanged={this.onValueChanged}
                        />
                    </div>
                </Route>
                <Route path="/qr">
                    <h1 className={classes.header}>流行病学调研门诊患者承诺书二维码</h1>
                    <QRCard patient={this.state.patient}/>
                </Route>
                <Route path="/report">
                    <h1 className={classes.header}>流行病学调研门诊患者承诺书报告</h1>
                    <Report/>
                </Route>
            </Switch>
        )
    }
}


export default withRouter(withStyles(styles)(Main));
