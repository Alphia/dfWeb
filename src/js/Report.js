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

class Report extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            record: {
                "name": "贺刚",
                "gender": "男",
                "pid": "610",
                "address": "西安",
                "contact": "138",
                "symptom": [1, 2],
                "bodyHeat": "37",
                "hasTraveledWuhan": true,
                "wuhanSites": "武汉",
                "hasTraveledOtherSites": true,
                "otherSites": "杭州",
                "hasTouchedNCov": true,
                "hasTouchedPotentialNCov": true,
                "isNearToPotentialNCov": true,
                "Confirmation": true
            }
        }
    }

    componentDidMount() {
        let recordUrl = config.heServerUrl + config.recordPath + this.props.location.search;
        console.log('recordUrl: ', recordUrl);
        axios.get(recordUrl)
            .then(res => {
                if (res.status === status.OK) {
                    console.log('读record...', res.data);
                    this.setState({record: res.data})
                }
            })
    }

    render() {
        const {classes} = this.props;
        const record = this.state.record;
        return (
            <div className={classes.cardWrapper}>
                <div className={classes.ratting}>
                    {Object.entries(record).map(([k,v])=>
                        <p><span>{k}: </span><span>{v}</span></p>
                    )}
                </div>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(Report));
