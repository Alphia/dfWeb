import React from 'react';
import '../css/App.scss';
import Logon from "./Logon";
import Main from "./Main";
import withStyles from "@material-ui/core/styles/withStyles";
import {BrowserRouter as Router, Redirect, Route, Switch, useHistory,} from "react-router-dom";
import SignUp from "./SignUp";
import {UserStore} from "./Constant";
import Evaluation from "./Evaluation";

const styles = {
    root: {
        width: '100%'
    }
};

function PrivateRoute({children, ...rest}) {
    return (<Route
        {...rest}
        render={({location}) =>
            UserStore.isAuthed ? (children) : (
                <Redirect
                    to={{
                        pathname: "/logon",
                        state: {from: location}
                    }}
                />)}
    />);
}

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/logon">
                    <Logon/>
                </Route>
                <Route path="/signUp">
                    <SignUp/>
                </Route>
                <Route path="/evaluation">
                    <Evaluation/>
                </Route>
                <PrivateRoute path="/">
                    <Main/>
                </PrivateRoute>
            </Switch>
        </Router>)
}

export default withStyles(styles)(App);
