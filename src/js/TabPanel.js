import React from "react";
import Typography from "@material-ui/core/Typography";


class TabPanel extends React.Component {
    render() {
        return (
            <Typography
                component="div"
                role="tabpanel"
                hidden={this.props.value !== this.props.index}
                id={`simple-tabpanel-${this.props.index}`}
                aria-labelledby={`simple-tab-${this.props.index}`}
            >
                {this.props.children}
            </Typography>
        )
    }
}

export default TabPanel;
