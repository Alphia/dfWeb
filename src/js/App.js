import React from 'react';
import '../css/App.scss';
import Main from "./Main";
import withStyles from "@material-ui/core/styles/withStyles";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

const styles = {
    root: {
        width: '100%'
    }
};

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Main/>
                </Route>
            </Switch>
        </Router>)
}

export default withStyles(styles)(App);
