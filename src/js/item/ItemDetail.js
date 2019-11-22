import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from "@material-ui/core/Tabs/index";
import Tab from "@material-ui/core/Tab/index";
import TabPanel from "../TabPanel";
import ItemStatisticsTable from "./ItemStatisticsTable";
import ItemSampleTable from "./ItemSampleTable";

const styles = {
    root: {
        margin: '2rem 0',
    },
    tabsWrapper: {
        marginLeft: '0rem',
        borderBottom: 'solid 1px rgb(234, 237, 237)',
        '& button': {
            minWidth: '4rem'
        },
        '& span': {
            fontSize: '1.8rem',
        }
    },
    tabPanels: {},
    table: {},
    comments: {}
};

class ItemDetail extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            tabValue: 0,
        }
    }

    handleTabChange = (ev, value) => {
        this.setState({tabValue: value});
    };


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.tabsWrapper}>
                    <Tabs value={this.state.tabValue} onChange={this.handleTabChange} indicatorColor="primary"
                          textColor="primary" variant="standard" aria-label="full width tabs example">
                        <Tab label="数据详情"/>
                        <Tab label="评价"/>
                    </Tabs>
                </div>
                <div className={classes.tabPanels}>
                    <TabPanel value={this.state.tabValue} index={0}>
                        <div className={classes.table}>
                            <ItemSampleTable/>
                            <ItemStatisticsTable/>
                        </div>
                    </TabPanel>
                    <TabPanel value={this.state.tabValue} index={1}>
                        <div className={classes.comments}>

                        </div>
                    </TabPanel>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ItemDetail)
