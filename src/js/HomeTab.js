import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import HotData from "./HotData";
import cls from 'classnames';
import QuickSearch from "./QuickSearch";
import Listing from "./Listing";


const styles = {
    root: {
        maxWidth: '1180px',
        margin: 'auto',
        padding: '0'
    },
    paper: {
        margin: '3rem auto',
        padding: '1.5rem',
    },
    hidden: {
        visibility: 'hidden'
    }
};

class HomeTab extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            currentContent: "landing"
        }
    }

    render() {
        const isShowing = content => content === this.props.content;
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                {isShowing("landing") && <div>
                    <Paper className={classes.paper}>
                        <HotData/>
                    </Paper>
                    <Paper className={classes.paper}>
                        <QuickSearch/>
                    </Paper>
                </div>}
                {isShowing("listing") && <div>
                    <Listing/>
                </div>}
            </div>
        )
    }
}

export default withStyles(styles)(HomeTab);
