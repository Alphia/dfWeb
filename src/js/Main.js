import React from "react";
import Header from "./Header";
import TabPanel from "./TabPanel";
import SearchingPage from "./SearchingPage";

class Main extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            userName: this.props.userName,
            tabValue: 0,
        }
    }

    handleTabChange = (value) => {
        this.setState({tabValue: value})
    };

    render() {
        return (
            <div>
                <Header userName={this.state.userName} onTabChange={this.handleTabChange}/>
                <TabPanel value={this.state.tabValue} index={0}>
                    <SearchingPage/>
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={2}>
                    Item Three
                </TabPanel>
            </div>
        )
    }
}


export default Main;
