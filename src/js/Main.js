import React from "react";
import Header from "./Header";
import TabPanel from "./TabPanel";
import HomeTab from "./HomeTab";
import Bottom from "./Footer";
import SellerTab from "./SellerTab";

class Main extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.homeRef = React.createRef();
        this.state = {
            userName: this.props.userName,
            tabValue: 0,
        }
    }

    handleTabChange = (value) => {
        this.setState({tabValue: value})
    };

    handleSearch = () => this.homeRef.current.view('listing')();

    render() {
        return (
            <div>
                <Header userName={this.state.userName} onTabChange={this.handleTabChange}/>
                <TabPanel value={this.state.tabValue} index={0}>
                    <HomeTab ref={this.homeRef} onSearch={this.handleSearch}/>
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={1}>
                    <SellerTab/>
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={2}>
                    Item Three
                </TabPanel>
                <Bottom/>
            </div>
        )
    }
}


export default Main;
