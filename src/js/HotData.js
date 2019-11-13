import React from "react";
import MediaCard from "./MediaCard";
import withStyles from "@material-ui/core/styles/withStyles";
import {hotDataModelList} from './MockData'

const styles = {
    root: {
        // margin: '3rem 0',
    },
    title: {
        margin: '1rem 0',
        fontSize: '3rem',
    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '-3rem',
    }
};

class HotData extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div>
                    <p className={classes.title}>热门数据</p>
                </div>
                <div className={classes.cards}>
                    {hotDataModelList.map(model => <MediaCard key={model.id} model={model}/>)}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(HotData);
