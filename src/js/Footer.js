import React from "react";
import Links from "./Links";
import {withStyles} from "@material-ui/core";
import Polices from "./Policys";

const styles = {
    bottomRoot: {},
    linksWrapper:{
        backgroundColor: 'rgb(51, 63, 72)',
    },
    links: {
        width: '1180px',
        margin: 'auto',
    },
    policyWrapper:{
        backgroundColor: 'rgb(38,47,54)',
    },
    policy:{
        width: '1180px',
        margin: 'auto',
        paddingLeft:'2rem'
    }
};

class Footer extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.bottomRoot}>
                <div className={classes.linksWrapper}>
                    <div className={classes.links}>
                        <Links/>
                    </div>
                </div>
                <div className={classes.policyWrapper}>
                    <div className={classes.policy}>
                        <Polices/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Footer)
