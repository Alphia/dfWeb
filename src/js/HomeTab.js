import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import HotData from "./HotData";
import QuickSearch from "./QuickSearch";
import ListingBox from "./ListingBox";
import ItemBox from "./item/ItemBox";


const styles = {
    root: {
        maxWidth: '1180px',
        margin: 'auto',
        padding: '0'
    },
    paper: {
        margin: '3rem auto',
        padding: '1.5rem',
    },
    hidden: {
        visibility: 'hidden'
    }
};

class HomeTab extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            content: "landing",
            itemId: 1
        }
    }

    viewItem = (id) => {
        this.setState({
            content: 'item',
            itemId: id,
        })
    };

    view = (content) => (id = null) => {
        this.setState({
            content: content,
            itemId: id
        })
    };

    render() {
        const {classes} = this.props;
        const isShowing = content => content === this.state.content;
        return (
            <div className={classes.root}>
                {isShowing("landing") && <div>
                    <Paper className={classes.paper}>
                        <HotData viewItem={this.view('item')}/>
                    </Paper>
                    <Paper className={classes.paper}>
                        <QuickSearch/>
                    </Paper>
                </div>}
                {isShowing("listing") && <div>
                    <ListingBox viewItem={this.view('item')}/>
                </div>}
                {isShowing("item") && <div>
                    <ItemBox id={this.state.itemId}/>
                </div>}
            </div>
        )
    }
}

export default withStyles(styles)(HomeTab);
