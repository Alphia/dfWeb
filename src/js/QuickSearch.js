import React from "react";
import {quickSearchModelList} from "./MockData";
import MediaCard from "./MediaCard";

class QuickSearch extends React.Component{
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
                    {quickSearchModelList.map(model => <MediaCard model={model}/>)}
                </div>
            </div>
        )
    }
}

export default QuickSearch;
