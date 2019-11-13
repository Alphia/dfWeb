import React from "react";
import {qsHospitalModelList, qsCompetitionModelList, hotDataModelList} from "./MockData";
import MediaCard from "./MediaCard";
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";

const styles = {
    root: {
        margin: '2rem 0',
    },
    title: {
        margin: '1rem 0',
        fontSize: '3rem',
        display: 'inline-block'
    },
    tabsWrapper: {
        display: 'inline-block',
        marginLeft: '2rem',
        '& button': {
            minWidth: '4rem'
        },
        '& span': {
            fontSize: '1.8rem',
            backgroundColor: 'transparent'
        }
    },
    tabPanels: {
        marginLeft: '-3rem',
    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
    }
};


class QuickSearch extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tabValue: 0,
        }
    };

    handleChange = (event, newValue) => {
        this.setState({tabValue: newValue});
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div>
                    <p className={classes.title}>快速检索</p>
                    <div className={classes.tabsWrapper}>
                        <Tabs value={this.state.tabValue} onChange={this.handleChange} indicatorColor="primary"
                              textColor="primary" variant="standard" aria-label="full width tabs example">
                            <Tab label="来源"/>
                            <Tab label="竞赛"/>
                            <Tab label="病例"/>
                        </Tabs>
                    </div>
                </div>
                <div className={classes.tabPanels}>
                    <TabPanel value={this.state.tabValue} index={0}>
                        <div className={classes.cards}>
                            {qsHospitalModelList.map(model => <MediaCard key={model.id} model={model}/>)}
                        </div>
                    </TabPanel>
                    <TabPanel value={this.state.tabValue} index={1}>
                        <div className={classes.cards}>
                            {qsCompetitionModelList.map(model => <MediaCard key={model.id} model={model}/>)}
                        </div>
                    </TabPanel>
                    <TabPanel value={this.state.tabValue} index={2}>
                        <div className={classes.cards}>
                            {hotDataModelList.map(model => <MediaCard key={model.id} model={model}/>)}
                        </div>
                    </TabPanel>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(QuickSearch);
