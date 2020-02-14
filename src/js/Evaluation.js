import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";
import {config} from "./config";
import status from "http-status";
import {withRouter} from "react-router";

const styles = {
    cardWrapper: {
        width: '100%',
        margin: 'auto',
        paddingTop: '20px',
        boxSizing: 'border-box',
        backgroundColor: "rgb(250, 250, 250)"

    },
    instruction: {
        paddingLeft: '30px',
        fontSize: '16px',
    },
    qrWrapper: {
        marginTop: '30px',
        margin: 'auto',
        width: '160px',
    },
    ratting: {
        fontSize: '20px',
        marginTop: '20px',
        textAlign: 'center',
    },
    media: {
        height: 180,
        '& img': {}
    },
};

class Evaluation extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            scoreData: {}
        }
    }

    componentDidMount() {
        let scoreUrl = config.heServerUrl + config.evaluationPath + this.props.location.search;
        console.log('scoreurl: ', scoreUrl);
        axios.get(scoreUrl)
            .then(res => {
                if (res.status === status.OK) {
                    console.log('读score...', res.data);
                    this.setState({scoreData: res.data})
                }
            })
    }

    render() {
        const {classes} = this.props;
        const scoreData = this.state.scoreData;
        return (
            <div className={classes.cardWrapper}>
                <div className={classes.ratting}>
                    <h3>姓名：{this.state.scoreData.name}</h3>
                    <h3>身份证：{scoreData.pid}</h3>
                    <h3>风险指数:{scoreData.score}</h3>
                </div>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(Evaluation));
