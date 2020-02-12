import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import back3 from "../pic/back3.jpg";

const styles = {
    back: {
        backgroundImage: `url(${back3})`,
        backgroundPosition: '30%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'rgb(38,47,54)',
    },
    bannerWrapper: {
        width: '1180px',
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
        backgroundColor: 'rgb(220,226,228)',
        '& button': {
            fontSize: '2rem',
            // color: '#ffffff !important',
            minWidth: '13rem',
        },
    },

    navTab:{
        display:'inline-block',
        color:'#ffffff',
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
            userName: this.props.userName,
            value: 0
        }
    }

    handleChange = (event, newValue) => {
        this.setState({value: newValue});
        this.props.onTabChange(newValue);
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.back}>
                    <div className={classes.bannerWrapper}>

                        <div className={classes.bannerLeft}>
                            <h2>Data Federation Shop </h2>
                        </div>

                        <div className={classes.bannerRight}>
                            <p>您好，&nbsp;{this.state.userName}</p>
                            <p onClick={this.props.logoutHandler}>退出</p>
                        </div>

                        <div className={classes.subTitle}>
                            <h2>国内首家以数据为中心的交易平台</h2>
                        </div>
                    </div>
                </div>

                <div className={classes.nav}>
                    <div className={classes.bannerWrapper}>
                        <div className={classes.navTab}>
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab label="健康日报" textColor="secondary"/>
                                <Tab label="健康指数" textColor="inherit"/>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withStyles(styles)(Header);
