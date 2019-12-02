import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    accessRoot: {}
};

class AccessManagement extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.accessRoot}>

            </div>
        )
    }
}

export default withStyles(styles)(AccessManagement)
