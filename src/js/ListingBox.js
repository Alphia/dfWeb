import React from "react";
import {listingModel} from "./MockData";
import ListingCard from "./ListingCard";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    listRoot: {
        '& >div': {
            marginBottom: '1rem',
        },
    },
    resultTip: {
        fontSize: '1.7rem',
        margin: 0,
    }
};

class ListingBox extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.listRoot}>
                <p className={classes.resultTip}>23项数据来源为"西京医院"的搜索结果：</p>
                {listingModel.map(model => <ListingCard model={model}/>)}
            </div>
        )
    }
}

export default withStyles(styles)(ListingBox);
