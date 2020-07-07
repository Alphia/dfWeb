import React from "react";

import TrafficMonitor from "./bigscreen/TrafficMonitor";
import withStyles from "@material-ui/core/styles/withStyles";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import TrafficMonitor3 from "./bigscreen/TrafficMonitor3";
import TrafficMonitor2 from "./bigscreen/TrafficMonitor2";
import TrafficMonitor5 from "./bigscreen/TrafficMonitor5";
import IncomeStas from "./IncomeStas";
import TrafficMonitor22 from "./bigscreen/TrafficMonitor22";
import blueStar from '../pic/blue.jpg';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const topHeight = 7;

const styles = {
    mainRoot: {
        // width: '98%',
        height: '100%',
        verticalAlign: 'top',
        backgroundColor: 'rgba(218,46,80,0.77)',
        backgroundImage: `url(${blueStar})`,
    },
    top: {
        height: `${topHeight}%`,
        color: 'rgba(83,174,254)',
        textAlign: 'center',
        boxSizing: 'border-box',
        alignItems: 'top',
        verticalAlign: 'top',
        // backgroundColor: 'rgb(51,51,51, 0.1)',
    },
    topLeft: {
        display: 'inline-block',
        paddingTop: '5px'
    },
    topRight: {
        float: 'right',
        color: 'red',
    },
    date: {
        color: '#CCCCCC',
        fontSize: '16px',
        width: '80px'

    },
    left: {
        width: '66%',
        // paddingLeft: '0.5%',
        display: 'inline-block',
        verticalAlign: 'top',
        height: `${100 - topHeight - 0.5}%`,
    },
    right: {
        width: '32.5%',
        height: `${100 - topHeight - 0.5}%`,
        display: 'inline-block',
        boxSizing: 'border-box',
        marginLeft: '0.5%',
    },
    leftTop: {
        height: '65%',
        boxSizing: 'border-box',
        marginLeft: '15px',
        borderRadius: '15px',
        marginBottom: '1%',
        backgroundColor: 'rgba(83,83,83,0.5)',
        overflow: 'hidden',
    },
    leftBottom: {
        height: '32%',
    },
    leftBottomItem: {
        width: '49%',
        height: '100%',
        marginLeft: '1%',
        borderRadius: '15px',
        backgroundColor: 'rgba(83,83,83,0.5)',
        boxSizing: 'border-box',
        display: 'inline-block',
    },
    rightItem: {
        height: '32%',
        boxSizing: 'border-box',
        marginBottom: '1.8%',
        borderRadius: '15px',
        backgroundColor: 'rgba(83,83,83,0.5)',
    },
};


const materialTheme = createMuiTheme({
    overrides: {
        'MuiInputBase-input': {
            font: '100px',
            color: 'red',
            dialogAction: {
                color: 'red',
            },
        },
        MuiInput: {
            color: 'red',
            backgroundColor: 'red',
        },
        MuiInputBase: {}
    },
});

class Main extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedDate: new Date()
        }
    }

    handleDateChange = (date) => {
        this.setState({selectedDate: date});
    };

    render() {
        const {classes} = this.props;
        return (
            <Router>
                <Switch>
                    <Route path={"/bigdata"}>
                        <div className={classes.mainRoot}>
                            {/*<div>*/}
                            <div className={classes.top}>
                                <div className={classes.topLeft}>
                                    <h1>主要城市销售价格与营收</h1>
                                </div>
                                <div className={classes.topRight}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            // className={classes.date}
                                            theme={materialTheme}
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            value={this.state.selectedDate}
                                            onChange={this.handleDateChange}
                                            inputProps={{className: classes.date}}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                                textColor: 'red'
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </div>
                            </div>
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
                            {/*</div>*/}
                        </div>
                    </Route>
                </Switch>

            </Router>
        )

    }
}

export default withStyles(styles)(Main);