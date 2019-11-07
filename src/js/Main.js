import React from "react";
import VerticalTabs from "./VerticalTabs";
import LogonPic from "../pic/logon.jpg";
import withStyles from "@material-ui/core/styles/withStyles";

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
        cursor: 'pointer',
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

class Main extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            userName: this.props.userName,
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.background}/>
                <div className={classes.banner}>
                    <div className={classes.bannerRight}>
                        <p className={classes.bannerP}>您好，&nbsp;
                            <b className={classes.bannerName}>{this.state.userName}</b>
                        </p>
                        <p className={classes.bannerP} onClick={this.props.logoutHandler}>登出</p>
                    </div>
                    <h2 className={classes.bannerTitle}>Data Federation Shop </h2>
                </div>

                <div className={classes.divider}></div>
                <VerticalTabs/>
            </div>
        )
    }
}


export default withStyles(styles)(Main);
