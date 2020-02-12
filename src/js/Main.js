import React from "react";
import Header from "./Header";
import TabPanel from "./TabPanel";
import HomeTab from "./HomeTab";
import Bottom from "./Footer";
import * as Survey from "survey-react";
import * as widgets from "surveyjs-widgets";
import $ from "jquery";
import * as SurveyCore from "survey-core";
import "survey-react/survey.css";
import {questions} from './questionnaireConstants';

window["$"] = window["jQuery"] = $;

widgets.prettycheckbox(Survey);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

//widgets.icheck(SurveyCore, $);
widgets.prettycheckbox(SurveyCore);
widgets.select2(SurveyCore, $);
widgets.inputmask(SurveyCore);
widgets.jquerybarrating(SurveyCore, $);
widgets.jqueryuidatepicker(SurveyCore, $);
widgets.nouislider(SurveyCore);
widgets.select2tagbox(SurveyCore, $);
widgets.signaturepad(SurveyCore);
widgets.sortablejs(SurveyCore);
widgets.ckeditor(SurveyCore);
widgets.autocomplete(SurveyCore, $);
widgets.bootstrapslider(SurveyCore);


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

    handleSearch = () => this.homeRef.current.view('listing')();

    onComplete = (result) => {
        console.log("Complete! " , result.data);

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
                        // showCompletedPage={false}
                        completedHtml={{}}
                        onValueChanged={this.onValueChanged}
                    />
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={1}>
                    健康指数
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={2}>
                    Item Three
                </TabPanel>
            </div>
        )
    }
}


export default Main;
