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

class Main extends React.Component {
    json = questions;

    constructor(props, context) {
        super(props, context);
        this.homeRef = React.createRef();
        this.state = {
            userName: this.props.userName,
            tabValue: 0,
        }
    }

    handleTabChange = (value) => {
        this.setState({tabValue: value})
    };

    onComplete = (result) => {
        console.log("submitting...", result.data);
        let url = config.heServerUrl + config.dailyReportPath;
        axios.post(url, result.data).then(res => {
            console.log('submit record with status and data:', res.status,res.data);
            if (res.status === status.OK) {
                setTimeout(()=>this.props.history.push('/index'),3000);
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
                        <QRCard/>
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={2}>
                    Item Three
                </TabPanel>
            </div>
        )
    }
}


export default Main;
