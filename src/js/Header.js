import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import cls from 'classnames';
import SearchingBox from "./SearchingBox";
import back3 from "../pic/back3.jpg";

const styles = {
    back: {
        backgroundImage: `url(${back3})`,
        backgroundPosition: '30%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'rgb(51,63,72)',
    },
    bannerWrapper: {
        width: '1180px',
        margin: 'auto',
    },
    bannerRight: {
        float: 'right',
        display: 'block',
        '& button': {
            fontSize: '2rem',
            color: '#ffffff !important',
            minWidth: '13rem',
        },
    },
    bannerLeft: {
        display: 'inline-block',
        padding: '1.1rem 0',
        color: '#ffffff',

        '& p': {
            display: 'inline-block',
            fontSize: '2rem',
            margin: '0 0 0 10rem',
        },
        '& h2': {
            color: 'gold',
            display: 'inline-block',
            margin: '0 0 0 0',
            fontSize: '2.4rem',
        },
    },
    subTitle: {
        color: '#ffffff',
        '& h2': {
            fontSize: '3rem',
        },
        '& p': {
            fontSize: '2rem',
        },
    },
    searchBoxWrapper: {
        margin: '2rem 0 1rem 0',
    }
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

    onSearch = () => {
        this.props.onSearch()
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.back}>
                {/*<div className={cls(classes.banner, classes.back)}>*/}
                <div className={classes.bannerWrapper}>
                    <div className={cls(classes.bannerRight, classes.selected)}>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="首页"/>
                            <Tab label="我的订单"/>
                            <Tab label="收藏夹"/>
                            <Tab label="训练模型"/>
                            <Tab label="退出" onClick={this.props.logoutHandler}/>
                        </Tabs>

                    </div>
                    <div className={classes.bannerLeft}>
                        <h2>Data Federation Shop </h2>
                        <p>您好，&nbsp;{this.state.userName}</p>
                    </div>
                    <div className={classes.subTitle}>
                        <h2>国内首家以数据为中心交易平台</h2>
                        <p>数据商店，开启你的数据资产之路</p>
                    </div>
                    <div className={classes.searchBoxWrapper}>
                        <SearchingBox onSearch={this.props.onSearch}/>
                    </div>
                    <p>a</p>
                </div>
            </div>
        )
    }
}


export default withStyles(styles)(Header);
