import React from 'react';
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import {Button} from "@material-ui/core";
import {withRouter} from "react-router";
import axios from 'axios';
import {config} from './config';
import sha256 from 'crypto-js/sha256';
import swAlert from 'sweetalert2';

const styles = {

    logonBox: {

        background: 'rgba(245,244,246,0.95)',
        paddingTop: '28px',
        width: '100%',
    },

    header:{
        marginBottom: '80px',
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
        // position: 'relative',
        width: '90%',
        marginLeft: '5%',
        // marginRight: '15px',
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
        width: '30%',
        marginLeft: '13%',
        backgroundColor: 'rgb(68,220,193)',
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
            swAlert.fire({
                title:'注册成功',
                text:'请返回登录，3秒后自动返回！',
                timer: 3000,
            }).then(()=> this.props.history.push('/logon'))
        }).catch(ex=>{
            console.log('error occurs on sign up request, exception: ',ex);
        })
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.logonBox}>
                <h1 className={classes.header}>请填写注册信息</h1>
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
