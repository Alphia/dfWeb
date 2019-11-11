import React from "react";
import VerticalTabs from "./VerticalTabs";
import Header from "./Header";

class Main extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            userName: this.props.userName,
        }
    }

    handleTabChange = (value) =>{
        return value;
    };

    render() {
        return (
            <div>
                <Header userName={this.state.userName} onTabChange={this.handleTabChange}/>
                <VerticalTabs/>
            </div>
        )
    }
}


export default Main;
