import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {withRouter} from "react-router";

const styles = {
    bannerWrapper: {
        width: '100%',
        margin: 'auto',
    },
    bannerRight: {
        float: 'right',
        color: '#ffffff',
        '& p': {
            margin: '1rem 0 0 1rem',
            display: 'inline-block',
            fontSize: '2rem',
        },
    },

    bannerLeft: {
        display: 'inline-block',
        padding: '1.1rem 0',
        '& h2': {
            color: 'gold',
            margin: '0 0 0 0',
            fontSize: '2.4rem',
        },
    },

    nav: {
        backgroundColor: 'rgb(230,229,231)',
        '& button': {
            fontSize: '1.8rem',
            // color: '#ffffff !important',
            minWidth: '13rem',
        },
    },

    navTab: {
        display: 'inline-block',
        color: '#ffffff',
    },

    subTitle: {
        color: '#ffffff',
        '& h2': {
            fontSize: '3rem',
            marginBottom: 0,
            marginTop: '1.5rem',
            paddingBottom: '1.5rem'
        },
    },
};

class Header extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            value: 0
        }
    }

    tabClickHandler = (url) => () => {
        this.props.history.push(url)
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.nav}>
                    <div className={classes.bannerWrapper}>
                        <div className={classes.navTab}>
                            <Tabs
                                value={this.props.tabIndex}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab onClick={this.tabClickHandler('/')} label="健康日报" textColor="secondary"/>
                                <Tab onClick={this.tabClickHandler('/report')} label="风险报告" textColor="inherit"/>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(withStyles(styles)(Header));
