import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    incomeRoot:{

    }
};

class IncomeStas extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.incomeRoot}>

            </div>
        )
    }
}

export default withStyles(styles)(IncomeStas)
