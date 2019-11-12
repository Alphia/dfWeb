import React from "react";
import SearchingBox from "./SearchingBox";
import withStyles from "@material-ui/core/styles/withStyles";


const styles = {
    searchingBox: {
        width: '1024px',
        margin: 'auto',
    }
};

class SearchingPage extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.searchingBox}>
                <SearchingBox/>

            </div>
        )
    }
}

export default withStyles(styles)(SearchingPage);
