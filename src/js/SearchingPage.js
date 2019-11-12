import React from "react";
import SearchingBox from "./SearchingBox";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import HotData from "./HotData";


const styles = {
    paper: {
        maxWidth: '1180px',
        margin: 'auto',
        padding: 'auto'
    },
    hotData: {
        // margin: 'auto'
    }
};

class SearchingPage extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.paper}>
                <SearchingBox/>
                <HotData classNmae={classes.hotData}/>
            </Paper>
        )
    }
}

export default withStyles(styles)(SearchingPage);
