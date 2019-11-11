import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import cls from 'classnames';

const styles = {
    back: {
        backgroundColor: 'rgba(188,187,189,0.7)',
    },
    banner: {
        margin: '0 0 0 0',
        height: '6.4rem',
        '& $right': {
            float: 'right',
            display: 'block',
            '& button': {
                fontSize: '2.4rem'
            }
        },
        '& $left': {
            display: 'inline-block',
            padding: '1.1rem 1.2rem',
            height: '6.4rem',
            '& p': {
                display: 'inline-block',
                fontSize: '2.4rem',
                margin: '0 0 0 10rem',
            },
            '& h2': {
                display: 'inline-block',
                margin: '0 0 0 0',
                fontSize: '3rem',
                color: 'rgb(0,100,180,0.7)'
            },
        }
    },
    right: {},
    left: {},
    divider: {
        height: 30,
        borderBottom: '0.2rem solid black',
        marginBottom: '4.5rem'
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
        console.log("newValue:", newValue);
        this.setState({value: newValue});
        this.props.onTabChange(newValue);
    };

    render() {
        const {classes} = this.props;
        console.log(classes);
        return (
            <div className={cls(classes.banner, classes.back)}>
                <div className={cls(classes.banner, classes.right)}>
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
                <div className={cls(classes.banner, classes.left)}>
                    <h2 className={classes.title}>Data Federation Shop </h2>
                    <p>您好，&nbsp;{this.state.userName}</p>
                </div>
            </div>
        )
    }
}


export default withStyles(styles)(Header);
