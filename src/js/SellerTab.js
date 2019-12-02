import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {Paper, Tab, Tabs} from "@material-ui/core";
import TabPanel from "./TabPanel";
import IncomeStas from "./IncomeStas";
import TrafficMonitor from "./TrafficMonitor";
import AccessManagement from "./AccessManagement";

const styles = {
    sellerWrapper: {
        width: 1180,
        margin: "0.5rem auto",
        flexGrow: 1,
        display: 'flex',
        height: 848,
        fontSize: '24px',
        '& button': {
            minWidth: '12rem',
            '& span': {
                alignItems: 'baseline'
            }
        }
    },
    tabs: {
        marginTop: '1rem',
        borderRight: 'solid 0.5px rgb(234, 237, 237)',
        width: '12%'
    },
    tab: {
        fontSize: '1.6rem',
    },
    panelWrapper:{
        width: '88%',
    },
    tabPanel: {
        width: '100%',
    }
};

class SellerTab extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            tabValue: 0
        }
    }

    handleTaBsChange = (event, newValue) => {
        this.setState({tabValue: newValue})
    };

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.sellerWrapper}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={this.state.tabValue}
                    onChange={this.handleTaBsChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab className={classes.tab} label="收益统计" id={"vertical-tab-0"}/>
                    <Tab className={classes.tab} label="流量监控" id={"vertical-tab-1"}/>
                    <Tab className={classes.tab} label="访问管理" id={"vertical-tab-2"}/>
                    <Tab className={classes.tab} label="数据管理" id={"vertical-tab-3"}/>
                    <Tab className={classes.tab} label="访问管理" id={"vertical-tab-4"}/>

                </Tabs>
                <div className={classes.panelWrapper}>
                    <TabPanel index={0} value={this.state.tabValue}>
                        <div className={classes.tabPanel}>
                            <IncomeStas/>
                        </div>
                    </TabPanel>
                    <TabPanel index={1} value={this.state.tabValue}>
                        <div className={classes.tabPanel}>
                            <TrafficMonitor/>
                        </div>
                    </TabPanel>
                    <TabPanel index={2} value={this.state.tabValue}>
                        <div className={classes.tabPanel}>
                            333
                            <AccessManagement/>
                        </div>
                    </TabPanel>
                </div>
            </Paper>
        )
    }
}

export default withStyles(styles)(SellerTab)
