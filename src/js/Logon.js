import React from 'react';
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import {Button} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import axios from 'axios';
import {config} from "./config";
import sha256 from 'crypto-js/sha256';
import status from 'http-status'
import {UserStore} from "./Constant";

const styles = {
    logonBox: {
        paddingTop: '40px',
        width: '100%',
    },
    header:{
        marginBottom: '200px',
        fontSize: '28px',
        textAlign: 'center',

    },
    label: {
        fontSize: '24px',
    },
    text: {
        fontSize: '18px',
        marginTop: '26px'
    },
    textField: {
        width: '90%',
        marginLeft: '5%',
        marginTop: '15px',
    },
    buttons: {
        width: '100%',
        fontSize: '18px',
        marginTop: '45px',
        alignItems: ''
    },
    button: {
        fontSize: '20px',
        width: '20%',
        marginLeft: '20%',
        backgroundColor: 'rgb(68,220,193)',
    }
};

class Logon extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: '',
        }
    }

    updateField = fieldName => ev => {
        this.setState({[fieldName]: ev.target.value})
    };

    logonHandler = () => {
        const user = {
            nick: this.state.username,
            passwd: sha256(this.state.password)
        }
        axios.post(config.heServerUrl + config.logonPath, user).then(res => {
            console.log('log on with status and data:', res.status, res.data);
            if (res.status === status.OK && res.data.err === '登陆成功') {
                console.log('logged:', res.status, res.data);
                UserStore.isAuthed = true;
                UserStore.user.nick = this.state.username;
                this.props.history.push('/')
            }
        })
    };

    signUpHandler = () => {
        this.props.history.push('/signUp');
    };

    updateUsername = this.updateField('username');
    updatePassword = this.updateField('password');

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.logonBox}>
                <h1 className={classes.header}>健康风险每日评测系统</h1>
                <TextField
                    className={classes.textField}
                    InputProps={{className: classes.text}}
                    InputLabelProps={{className: classes.label}}
                    value={this.state.username}
                    onChange={this.updateUsername}
                    placeholder="字母与数字"
                    label="用户"/>
                <TextField
                    className={classes.textField}
                    InputProps={{className: classes.text}}
                    type='password'
                    InputLabelProps={{className: classes.label}}
                    value={this.state.password}
                    onChange={this.updatePassword}
                    placeholder="字母与数字"
                    label="密码"/>
                <div className={classes.buttons}>
                    <Button className={classes.button} onClick={this.logonHandler}>登录</Button>
                    <Button className={classes.button} onClick={this.signUpHandler}>注册</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(Logon))
