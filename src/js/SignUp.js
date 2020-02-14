import React from 'react';
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import {Button} from "@material-ui/core";
import {withRouter} from "react-router";
import axios from 'axios';
import {config} from './config';
import sha256 from 'crypto-js/sha256';

const styles = {

    logonBox: {

        background: 'rgba(245,244,246,0.95)',
        paddingTop: '28px',
        paddingBottom: '300px',
        width: '100%',
    },
    label: {
        fontSize: '24px',
    },
    text: {
        fontSize: '18px',
        marginTop: '26px'
    },
    textField: {
        // position: 'relative',
        width: '90%',
        marginLeft: '5%',
        // marginRight: '15px',
        marginTop: '15px',
    },
    buttons: {
        // position: 'relative',
        width: '100%',
        fontSize: '18px',
        marginLeft: '20%',
        marginTop: '45px',
        // margin: '25px 0 0 85px',
    },
    button: {
        fontSize: '20px',
        backgroundColor: 'rgb(68,220,193)',
        margin: '0 50px 0 0',
    }

};

class SignUp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            password: '',
            mobile: '',
            nick: '',
            pid: '',
        }
    }

    updateField = fieldName => ev => {
        this.setState({[fieldName]: ev.target.value});
    };

    goBackLogonHandler = () => {
        this.props.history.push('/logon');
    };

    signUpHandler = () => {
        axios.post(config.heServerUrl + config.registerPath, {
            name: this.state.name,
            nick: this.state.nick,
            pid: this.state.pid,
            mobile: this.state.mobile,
            passwd: sha256(this.state.password)
        }).then(res => {
            console.log('res.status: ', res.status)
            console.log('res.data: ', res.data)
        }).catch(ex=>{
            console.log('error occurs on sign up request, exception: ',ex);
        })
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.logonBox}>
                <TextField
                    className={classes.textField}
                    InputProps={{className: classes.text}}
                    InputLabelProps={{className: classes.label}}
                    value={this.state.name}
                    onChange={this.updateField('name')}
                    placeholder="必须为汉字或字母"
                    label="姓名"/>
                <TextField
                    className={classes.textField}
                    InputProps={{className: classes.text}}
                    InputLabelProps={{className: classes.label}}
                    value={this.state.pid}
                    onChange={this.updateField('pid')}
                    placeholder="数字与字母"
                    label="身份证"/>
                <TextField
                    className={classes.textField}
                    InputProps={{className: classes.text}}
                    InputLabelProps={{className: classes.label}}
                    value={this.state.mobile}
                    onChange={this.updateField('mobile')}
                    placeholder="数字"
                    label="电话"/>
                <TextField
                    className={classes.textField}
                    InputProps={{className: classes.text}}
                    InputLabelProps={{className: classes.label}}
                    value={this.state.nick}
                    onChange={this.updateField('nick')}
                    placeholder="字母与数字"
                    label="用户名"/>
                <TextField
                    className={classes.textField}
                    InputProps={{className: classes.text}}
                    type='passwd'
                    InputLabelProps={{className: classes.label}}
                    value={this.state.password}
                    onChange={this.updateField('password')}
                    placeholder="字母与数字"
                    label="密码"/>
                <div className={classes.buttons}>
                    <Button className={classes.button}
                            onClick={this.goBackLogonHandler}>返回登录</Button>
                    <Button className={classes.button}
                            onClick={this.signUpHandler}>完成注册</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(SignUp))
