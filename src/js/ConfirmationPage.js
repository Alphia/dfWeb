import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import {withRouter} from "react-router";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";


const styles = {
    header: {
        textAlign: 'center',
    },
    instruction: {
        textAlign: 'left',
        whiteSpace: 'pre-wrap',
        fontSize: '16px',
        margin: 4,
    },
    radios:{
        display: 'inline-block',
        marginLeft: '60px',
        marginTop: '30px',
    },
    radio:{
        '& span':{
            fontSize: '16px'
        }
    },
    button: {
        fontSize: '15px',
        height: '26px'
    }
};

class ConfirmationPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            confirmationValue: false
        }
    }

    handleChange = event => {
        this.setState({confirmationValue: event.target.value==='true'})
    };

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <h1 className={classes.header}>{'西安交通大学第二附属医院\n 流行病学调研承诺书'}</h1>
                <p className={classes.instruction}>{'      您好，根据《中华人民共和国传染病防治法》等相关法律法规要求，请您配合我们填写以下内容，医院负责保护您所填写的个人信息安全。\n' +
                '      我国《刑法》第三百三十条规定：违反传染病防治法的规定，引起甲类传染病传播或者有传播严重危险的，处三年以下有期徒刑或者拘役；后果特别严重的，处三年以上七年以下有期徒刑。\n' +
                '       请您务必如实填报，若故意隐瞒相关情况，造成后果，患者及陪同人员将要承担相应法律责任。\n' +
                '       请您提交成功后查看数据并将详细数据出示给医务人员查验，谢谢您的理解和配合。\n' +
                '\n' +
                '      承诺：我承诺以下填写情况属实，如恶意隐瞒信息，自愿承担相关法律责任。\n'}</p>

                <RadioGroup className={classes.radios} value={this.state.confirmationValue} onChange={this.handleChange}>
                    <FormControlLabel className={classes.radio} value={false} control={<Radio/>} label="拒绝"/>
                    <FormControlLabel className={classes.radio} value={true} control={<Radio/>} label="同意"/>
                </RadioGroup>
                {this.state.confirmationValue ? <Button className={classes.button} variant="outlined" color="secondary" href={'/survey'} >开始填写</Button>: <></>}
            </React.Fragment>
        )
    }
}

export default withRouter(withStyles(styles)(ConfirmationPage))
