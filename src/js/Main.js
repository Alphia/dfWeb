import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import {questions} from './questionnaireConstants';
import axios from 'axios';
import QRCard from "./QRCard";
import {config} from './config';
import {Route, Switch, withRouter} from "react-router";
import {withStyles} from "@material-ui/core";
import status from 'http-status';

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
            pid: 0,
            name: '',
        }
    }

    onComplete = (result) => {
        let payload = result.data;
        this.setState({pid: payload.pid, name: payload.name});
        axios.post(config.heServerUrl + config.dailyReportPath, payload).then(res => {
            console.log('submit record with status and data:', res.status, res.data);
            if (res.status === status.OK) {
                console.log('跳转中...');
                this.setState({hasSubmit: true});
                setTimeout(() => this.props.history.push('/qr'), 3000);
            }
        })
    };

    render() {
        let model = new Survey.Model(questions);
        const {classes} = this.props;
        return (
            <Switch>
                <Route path="/survey">
                    <h1 className={classes.header}>流行病学调研门诊患者承诺书</h1>

                    <p className={classes.instruction}>{'      您好，根据《中华人民共和国传染病防治法》等相关法律法规要求，请您配合我们填 写以下内容， 医院负责保护您所填写的个人信息安全。 '}</p>
                    <p className={classes.instruction}>{'      请您提交成功后, 将详细数据出示给医务人员查验。'}</p>
                    <p className={classes.tip}><b>*重要提示:请您谨慎如实填写以下信息，并确保所填信息准确无误，一旦提交后不能修改!</b></p>
                    <div className={classes.surveyWrapper}>
                        <Survey.Survey
                            model={model}
                            onCompleting={this.onComplete}
                            completeText={'提交'}
                            showCompletedPage={true}
                            completedHtml={'<h1>提交成功，谢谢！</h1><h3>请在患者承诺报告里查看详情</h3><p>3秒后跳转</p>'}
                            onValueChanged={this.onValueChanged}
                        />
                    </div>
                </Route>
                <Route path="/qr">
                    <h1 className={classes.header}>流行病学调研门诊患者承诺书二维码</h1>
                    <QRCard pid={this.state.scoreData}/>
                </Route>
            </Switch>
        )
    }
}


export default withRouter(withStyles(styles)(Main));
