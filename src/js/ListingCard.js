import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    card: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
    },
    media: {
        width: '20%',
        height: 180,
        '& img': {
            backgroundColor: "rgb(234, 237, 237)"
        }
    },
    summary: {
        width: '80%',
        boxSizing: 'border-box',
        '& h3': {
            fontSize: '1.6rem',
            margin: '1.6rem'
        },
    },
    content: {
        display: 'flex',
        '& div': {
            padding: '0.5rem 3rem 0rem 1.6rem',
            fontSize: '1.6rem',
            maxWidth: '25%',
        },
        '& p': {},
    }
};

class ListingCard extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {classes, model} = this.props;
        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={model.imgUrl}
                    component='div'/>
                <div className={classes.summary}>
                    <h3 className={classes.title}>名称：{model.name}</h3>
                    <p><span>
                        {model.stars}
                    </span> of {model.soldAmount}</p>
                    <div className={classes.content}>
                        <div>
                            <p>科室：{model.department}</p>
                            <p>病症：{model.symptom}</p>
                            <p>类型：{model.dataType}</p>

                        </div>
                        <div>
                            <p>条数：{model.amount}</p>
                            <p>大小：{model.size}</p>
                            <p>类型：{model.format}</p>

                        </div>
                        <div>
                            <p>时间：{model.start + "至" + model.end}</p>
                            <p>星级：{model.stars}</p>
                            <p>来源：{model.publisher}</p>
                        </div>
                        <div>
                            <p>价格：{model.price}</p>
                            <p>历史购买次数：{model.soldAmount}</p>
                            <p>最近一月购买次数：{model.latestMonthSold}</p>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withStyles(styles)(ListingCard)
