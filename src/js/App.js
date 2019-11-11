import React from 'react';
import '../css/App.scss';
import Logon from "./Logon";
import Main from "./Main";

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isStranger: false,
            userName: "wang",
        }
    }

    logon = (userName) => () => {
        this.setState({isStranger: false, userName: userName})
    };

    logout = () => {
        this.setState({isStranger: true})
    };

    render() {
        return (
            <React.Fragment>
                {this.state.isStranger
                    ?
                    <Logon logonHandler={this.logon}/>
                    :
                    <Main userName={this.state.userName} logoutHandler={this.logout}/>
                }
            </React.Fragment>)
    }
}

export default App;
