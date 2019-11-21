import Button from "@material-ui/core/Button/index";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CardMedia from "@material-ui/core/CardMedia/index";
import Card from "@material-ui/core/Card/index";
import {itemModelList} from "../MockData";
import ItemDetail from "./ItemDetail";

const styles = {
    itemRoot: {
        maxWidth: '1180px',
        margin: 'auto',
        padding: '0',
    },
    media: {
        width: '25%',
        height: 200,
        display: 'inline-block',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    summary: {
        width: '55%',
        boxSizing: 'border-box',
        paddingLeft: '2rem',
        display: 'inline-box',
        verticalAlign: 'top',
        height: 200,
        '& h3': {
            fontSize: '1.7rem',
            margin: '0',
        },
    },

};

class ItemBox extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            tabValue: 0,
        }
    }

    handleTabChange = (ev, value) => {
        this.setState({tabValue: value});
    };

    render() {
        const {classes} = this.props;
        const model = itemModelList[this.props.id];
        return (
            <div className={classes.itemRoot}>
                <Card className={classes.card}>

                    <CardMedia
                        className={classes.media}
                        image={model.imgUrl}
                        component='div'/>

                    <div className={classes.summary}>

                        <div className={classes.title}>
                            <h3>{model.name}</h3>
                            <div className={classes.stars}>
                                <p/>
                                <span>{model.stars} of <b>{model.soldAmount}</b></span>
                            </div>
                        </div>

                        <div className={classes.price}>
                            <span><b>{model.price}</b>元</span>
                        </div>

                        <div className={classes.content}>
                            <div>
                                <p>来源：{model.publisher}</p>
                                <p>科室：{model.department}</p>
                                <p>病症：{model.symptom}</p>

                            </div>
                            <div>
                                <p>类型：{model.dataType}</p>
                                <p>数量：{model.amount}</p>
                                <p>格式：{model.format}</p>
                            </div>
                            <div>
                                <p>大小：{model.size}</p>
                                <p>历史购买次数：{model.soldAmount}</p>
                                <p>最近一月购买次数：{model.latestMonthSold}</p>
                            </div>
                        </div>
                        <div className={classes.buy}>
                            <Button variant="outlined" color="primary">购买</Button>
                        </div>
                    </div>
                    <div>
                        <ItemDetail/>
                    </div>
                </Card>
            </div>

        )
    }
}

export default withStyles(styles)(ItemBox);
