import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import ListingBox from "./ListingBox";

const styles = {
    root: {
        maxWidth: '1180px',
        margin: 'auto',
        padding: '0'
    },
    paper: {
        margin:'3rem auto',
        padding: '1.5rem',
    },
};

class Listing extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <ListingBox/>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Listing);
