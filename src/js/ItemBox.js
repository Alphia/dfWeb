import Button from "@material-ui/core/Button";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import {itemModelList} from "./MockData";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";

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
                        <Tabs value={this.state.tabValue}
                              onChange={this.handleTabChange} indicatorColor="primary" textColor="primary" centered>
                            <Tab label="详情"/>
                            <Tab label="评价"/>
                        </Tabs>

                        <TabPanel value={this.state.tabValue} index={0}>
                            <div>
                                <p>抽样数据</p>

                            </div>
                            <div>
                                <p>统计特征</p>
                            </div>
                            <div>
                                <p>使用示例</p>
                            </div>
                        </TabPanel>
                        <TabPanel value={this.state.tabValue} index={1}>
                            <div>
                                统计特征：1
                            </div>
                            <div>
                                抽样数据：2
                            </div>
                            <div>
                                使用示例：3
                            </div>
                        </TabPanel>
                    </div>
                </Card>
            </div>

        )
    }
}

export default withStyles(styles)(ItemBox);
