import React from 'react';
import '../css/App.scss';
import Logon from "./Logon";
import Main from "./Main";
import withStyles from "@material-ui/core/styles/withStyles";

const styles={
    root:{
        backgroundColor:"rgb(234, 237, 237)",
        height:'100%',
    }
};

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isStranger: false,
            userName: "王医生",
        }
    }

    logon = (userName) => () => {
        this.setState({isStranger: false, userName: userName})
    };

    logout = () => {
        this.setState({isStranger: true})
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                {this.state.isStranger
                    ?
                    <Logon logonHandler={this.logon}/>
                    :
                    <Main userName={this.state.userName} logoutHandler={this.logout}/>
                }
            </div>)
    }
}

export default withStyles(styles)(App);
