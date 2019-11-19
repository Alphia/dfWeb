import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import ListingBox from "./ListingBox";

const styles = {
    root: {
        maxWidth: '1180px',
        margin: 'auto',
        padding: '0',

    },
};

class Listing extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <ListingBox/>
            </div>
        )
    }
}

export default withStyles(styles)(Listing);
