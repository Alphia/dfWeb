import React from "react";
import Header from "./Header";
import TabPanel from "./TabPanel";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import {questions} from './questionnaireConstants';
import axios from 'axios';
import QRCard from "./QRCard";
import {config} from './config';
import {UserStore} from "./Constant";
import {Route, Switch, withRouter} from "react-router";
import {Button, withStyles} from "@material-ui/core";
import status from 'http-status';

const styles = {
    buttons: {
        width: '100%',
        fontSize: '18px',
        marginTop: '45px',
        textAlign: 'center'
    },
    button: {
        fontSize: '20px',
        backgroundColor: 'rgb(68,220,193)',
        margin: '0 50px 0 0',
    }
};

class Main extends React.Component {
    json = questions;

    constructor(props, context) {
        super(props, context);
        this.state = {
            tabValue: 0,
            scoreData: 0,
            hasSubmit: false,
        }
    }



    startHandler = () => {
        this.props.history.push('/survey');
    };

    onComplete = (result) => {
        let report = result.data;
        report['nick'] = UserStore.user.nick;
        axios.post(config.heServerUrl + config.dailyReportPath, report).then(res => {
            console.log('submit record with status and data:', res.status, res.data);
            if (res.status === status.OK) {
                console.log('跳转中...');
                this.setState({hasSubmit: true});
                setTimeout(() => this.props.history.push('/report'), 3000);
            }
        })
    };

    render() {
        let model = new Survey.Model(this.json);
        const {classes} = this.props;
        return (
            <Switch>
                <Route exact path="/">
                    <Header tabIndex={0}/>
                    <TabPanel value={0} index={0}>
                        {this.state.hasSubmit ?
                            <h1>今日已填写，明日可以再填</h1> :
                            <div>
                                <div className={classes.buttons}>
                                    <h1>请您每天按时填写</h1>
                                    <Button className={classes.button} onClick={this.startHandler}>开始填写</Button>
                                </div>
                            </div>
                        }
                    </TabPanel>
                </Route>
                <Route path="/survey">
                    <Header tabIndex={0}/>
                    <TabPanel value={0} index={0}>
                        <Survey.Survey
                            model={model}
                            onCompleting={this.onComplete}
                            completeText={'提交'}
                            showCompletedPage={true}
                            completedHtml={'<h1>谢谢提交</h1><h3>请在风险报告里查看详情</h3><p>3秒后跳转</p>'}
                            onValueChanged={this.onValueChanged}
                        />
                    </TabPanel>
                </Route>
                <Route path="/report">
                    <Header tabIndex={1}/>
                    <TabPanel value={1} index={1}>
                        <QRCard scoreData={this.state.scoreData}/>
                    </TabPanel>
                </Route>
            </Switch>
        )
    }
}


export default withRouter(withStyles(styles)(Main));
