import React from 'react';
import '../css/App.scss';
import Logon from "./Logon";
import LogonPic from "../pic/logon.jpg";
import withStyles from "@material-ui/core/styles/withStyles";
import VirticalTabs from './VirticalTabs';

const styles = {
    banner: {
        margin: '0 0 0 50px',
        fontSize: '30px',
    },
    bannerRight: {
        float: 'right',
        display: 'block'
    },
    bannerP: {
        display: 'inline-block',
        margin: '30px 30px',
    },
    bannerName: {
        color: 'rgb(0,100,180,0.7)',
        display: 'inline-block',
    },
    background: {
        height: '100%',
        backgroundImage: `url(${LogonPic})`,
        opacity: '0.2',
        width: '100%',
        position: 'absolute',
        right: 0,
        zIndex: -1,
    },
    bannerTitle: {
        margin: '50px 0 0 0',
        fontSize: '80px',
        color: 'rgb(0,100,180,0.7)'
    },
    divider: {
        height: 30,
        borderBottom: '2px solid',
        marginBottom: '45px'
    }
};


class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            hasLogon: false,
            userName: "wang",
        }
    }

    logon = (userName) => () => {
        this.setState({hasLogon: true, userName: userName})
    };

    logout = () => {
        this.setState({hasLogon: false})
    };

    render() {
        // let userName = this.state.userName;
        const {classes} = this.props;

        return (
            <React.Fragment>
                {this.state.hasLogon ?
                    (<div>
                        <div className={classes.background}/>
                        <div className={classes.banner}>
                            <div className={classes.bannerRight}>
                                <p className={classes.bannerP}>Welcome &nbsp;
                                    <b className={classes.bannerName}>{this.state.userName}</b>
                                </p>
                                <p className={classes.bannerP} onClick={this.logout}>Log out</p>
                            </div>
                            <h2 className={classes.bannerTitle}>Data Federation Shop </h2>
                        </div>

                        <div className={classes.divider}></div>
                        <VirticalTabs/>
                        {/*<div>*/}
                        {/*    <HospitalSelector suggestions={{label: 'Xijing Hospital'}, {label: 'Jiaoda First Hospital'}}/>*/}
                        {/*</div>*/}

                    </div>) : <Logon logonHandler={this.logon}/>}
            </React.Fragment>)
    }
}

export default withStyles(styles)(App);
