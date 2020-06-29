import React from "react";
import TrafficMonitor from "./bigscreen/TrafficMonitor";
import withStyles from "@material-ui/core/styles/withStyles";
import TrafficMonitor3 from "./bigscreen/TrafficMonitor3";
import TrafficMonitor2 from "./bigscreen/TrafficMonitor2";
import TrafficMonitor5 from "./bigscreen/TrafficMonitor5";
import IncomeStas from "./IncomeStas";
import TrafficMonitor22 from "./bigscreen/TrafficMonitor22";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const styles = {
    mainRoot: {
        width: '100%',
        height: '100%',
        verticalAlign: 'top',
    },
    left: {
        width: '66%',
        display: 'inline-block',
        verticalAlign: 'top',
        height: '100%',
    },
    right: {
        width: '33%',
        height: '100%',
        display: 'inline-block',
    },
    leftTop: {
        height: '66%',
        boxSizing: 'border-box',
        borderRight: 'solid 1px rgb(83,174,254)',
        borderBottom: 'solid 1px rgb(83,174,254)'
    },
    leftBottom: {
        height: '33%',
    },
    leftBottomItem: {
        width: '50%',
        height: '100%',
        borderRight: 'solid 1px rgb(83,174,254)',
        boxSizing: 'border-box',
        display: 'inline-block'
    },
    rightItem: {
        height: '33%',
        boxSizing: 'border-box',
        borderBottom: 'solid 1px rgb(83,174,254)',
        borderColor: 'rgb(83,174,254)',
        // backgroundColor: 'red'
    },
};


class Main extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {classes} = this.props;
        return (
            <Router>
                <Switch>
                    <Route path={"/bigdata"}>
                        <div className={classes.mainRoot}>
                            <div className={classes.left}>
                                <div className={classes.leftTop}>
                                    <TrafficMonitor5/>
                                </div>
                                <div className={classes.leftBottom}>
                                    <div className={classes.leftBottomItem}>
                                        <TrafficMonitor/>
                                    </div>
                                    <div className={classes.leftBottomItem}>
                                        <IncomeStas/>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.right}>
                                <div className={classes.rightItem}>
                                    <TrafficMonitor2/>
                                </div>
                                <div className={classes.rightItem}>
                                    <TrafficMonitor22/>
                                </div>
                                <div className={classes.rightItem}>
                                    <TrafficMonitor3/>
                                </div>
                            </div>
                        </div>
                    </Route>
                </Switch>

            </Router>
        )

    }
}

export default withStyles(styles)(Main);