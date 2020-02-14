import React from "react";
import Header from "./Header";
import TabPanel from "./TabPanel";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import {questions} from './questionnaireConstants';
import axios from 'axios';
import QRCard from "./QRCard";
import status from "./Logon";
import {config} from './config';
import {UserStore} from "./Constant";

class Main extends React.Component {
    json = questions;

    constructor(props, context) {
        super(props, context);
        this.homeRef = React.createRef();
        this.state = {
            userName: this.props.userName,
            tabValue: 0,
            score: 0,
        }
    }

    handleTabChange = (value) => {
        this.setState({tabValue: value});
        axios.get(config.heServerUrl + config.evaluationPath + '?nick=' + UserStore.user.nick)
            .then(res => {
                if (res.status === status.OK) {
                    console.log('跳转中...');
                    this.setState({score: res.data})
                }
            })
    };

    onComplete = (result) => {
        let report = result.data;
        report['nick']=UserStore.user.nick;
        axios.post(config.heServerUrl + config.dailyReportPath, report).then(res => {
            console.log('submit record with status and data:', res.status, res.data);
            if (res.status === status.OK) {
                console.log('跳转中...');
                setTimeout(() => this.handleTabChange('1'), 3000);
            }
        })
    };

    render() {
        var model = new Survey.Model(this.json);
        return (
            <div>
                <Header userName={this.state.userName} onTabChange={this.handleTabChange}/>
                <TabPanel value={this.state.tabValue} index={0}>
                    <Survey.Survey
                        model={model}
                        onComplete={this.onComplete}
                        completeText={'提交'}
                        completedHtml={'<h1>谢谢提交</h1><h3>请在风险报告里查看详情</h3><p>3秒后跳转</p>'}
                        onValueChanged={this.onValueChanged}
                    />
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={1}>
                    <QRCard score={this.state.score}/>
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={2}>
                    Item Three
                </TabPanel>
            </div>
        )
    }
}


export default Main;
