import React from "react";
import VerticalTabs from "./VerticalTabs";
import Header from "./Header";
import TabPanel from "./TabPanel";

class Main extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            userName: this.props.userName,
            tabValue: 0,
        }
    }

    handleTabChange = (value) =>{
        this.setState({tabValue: value})
    };

    render() {
        return (
            <div>
                <Header userName={this.state.userName} onTabChange={this.handleTabChange}/>
                <TabPanel value={this.state.tabValue} index={0}>
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={2}>
                    Item Three
                </TabPanel>
                <VerticalTabs/>
            </div>
        )
    }
}


export default Main;
