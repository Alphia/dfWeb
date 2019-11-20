import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import withStyles from "@material-ui/core/styles/withStyles";
import Icons from "../pic/icons.png";

const styles = {
    card: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0.8rem'
    },
    media: {
        width: '15%',
        height: 130,
        '& img': {
            backgroundColor: "rgb(234, 237, 237)"
        },
        '&:hover': {
            cursor: 'pointer',
            color: 'red',
        }
    },
    summary: {
        width: '85%',
        boxSizing: 'border-box',
        paddingLeft: '1rem',
        '& h3': {
            fontSize: '1.7rem',
            margin: '0',
            '&:hover': {
                cursor: 'pointer',
                color: 'red',
            }
        },
    },
    title: {
        display: 'inline-block'
    },
    price: {
        display: 'inline-block',
        fontSize: '1.8rem',
        verticalAlign: 'top',
        marginLeft: '5rem',
        '& b': {
            color: 'rgb(0,102,192)',
        }
    },
    stars: {
        '& p': {
            backgroundImage: `url(${Icons})`,
            backgroundPosition: '-175px -368px',
            backgroundSize: '400px 900px',
            width: '8rem',
            height: '1.5rem',
            display: 'inline-block',
            margin: '0',
            float: 'left',
        },
        '& span': {
            fontSize: '1.3rem',
            marginLeft: '0.5rem',
            '& b': {
                color: 'rgb(0,102,192)',
                '&:hover': {
                    textDecoration: 'under-line',
                    cursor: 'pointer'
                }
            }
        }
    },
    content: {
        display: 'flex',
        marginTop: '1.4rem',
        fontSize: '1.6rem',
        '& div': {
            padding: '0rem 3rem 0rem 0rem',
            width: '22%',
        },
        '& p': {
            fontSize: '1.6rem',
            margin: '0.1rem 0 0 0'
        },
    },
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
                    onClick={()=>this.props.viewItem(model.id)}
                    className={classes.media}
                    image={model.imgUrl}
                    component='div'/>

                <div className={classes.summary}>

                    <div className={classes.title}>
                        <h3 onClick={()=>this.props.viewItem(model.id)}>{model.name}</h3>
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
                </div>
            </Card>
        )
    }
}

export default withStyles(styles)(ListingCard)
