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
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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
        verticalAlign: 'top',
    },
    topLeft: {
        display: 'inline-block',
        paddingTop: '5px'
    },
    topRight: {
        float: 'right',
    },

    date: {
        color: '#CCCCCC',
        fontSize: '16px',
        width: '80px'
    },

    gridRoot: {
        height: `${100 - topHeight - 0.5}%`,
    },
    left: {
        height: `${100 - topHeight - 0.5}%`,
    },
    rightTop: {
        height: '64%',
        // display: 'inline-block',
        // boxSizing: 'border-box',
    },
    leftTop: {
        height: '64%',
        boxSizing: 'border-box',
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
        height: '49%',
        boxSizing: 'border-box',
        marginBottom: '2%',
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

                            <Grid container spacing={3} className={classes.gridRoot}>
                                <Grid item xs={8} className={classes.leftTop}>
                                    <div>
                                        <TrafficMonitor5/>
                                    </div>
                                </Grid>
                                <Grid item xs={4} className={classes.rightTop}>
                                    <div className={classes.rightItem}>
                                        <TrafficMonitor2/>
                                    </div>
                                    <div className={classes.rightItem}>
                                        <TrafficMonitor22/>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>xs=3</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper}>xs=3</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper}>xs=3</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper}>xs=3</Paper>
                                </Grid>
                            </Grid>
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