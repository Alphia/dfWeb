import React from 'react';
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import LogonPic from '../pic/logon.jpg';
import {Button} from "@material-ui/core";

const styles = {
    header: {
        margin: '50px 0 0 50px',
        fontSize: '80px',
        color: 'rgb(0,100,180,0.7)'
    },
    logBackground: {
        height: '100%',
        backgroundImage: `url(${LogonPic})`,
    },
    logonBox: {
        height: '40%',
        position: 'relative',
        left: '60%',
        top: '40%',
        width: '30%',
        background: 'rgba(101,184,240,0.8)'
    },
    label: {
        fontSize: '30px',
    },
    text: {
        fontSize: '30px',
        marginTop: '26px'
    },
    textField: {
        position: 'relative',
        margin: '40px 0 0 120px',
    },
    buttons: {
        position: 'relative',
        fontSize: '30px',
        margin: '40px 0 0 120px',
    },
    button:{
        fontSize: '30px',
        backgroundColor:'rgb(68,220,193)',
        margin: '0 60px 0 0',
    }

};


class Logon extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: ''
        }
    }

    updateField = fieldname => ev => {
        this.state[fieldname] = ev.target.value;
        this.setState(this.state);
    };


    updateUsername = this.updateField('username')
    updatePassword = this.updateField('password')

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.logBackground}>
                <h2 className={classes.header}>Data Federation Shop</h2>
                <div className={classes.logonBox}>
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
                        <Button className={classes.button} onClick={this.props.logonHandler(this.state.username)}>登录</Button>
                        <Button className={classes.button}>注册</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Logon)
