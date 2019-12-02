import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ForbiddenIcon from "@material-ui/icons/NotInterested"
import Available from "@material-ui/icons/Done"
import {Collapse} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import {ExpandLess, ExpandMore} from "@material-ui/icons";

const styles = {
    accessRoot: {
        '& span': {
            width: '8rem',
            textAlign: 'center',
            fontSize: '1.8rem',
        }
    },
    accessP: {
        margin: '3rem',
        fontSize: '2rem'
    },
    forbidden: {
        color: 'red',
    },
    available: {
        color: 'green',
    },
    collapse: {
        margin: '0 0 0 15rem',
        '& span': {
            width: '8rem',
            textAlign: 'center',
            fontSize: '1.2rem',
        }
    }
};


const dataSources = [
    {
        id: 1,
        name: '西京医院白血病数据',
        price: 12600,
        size: '123 GB',
        users: [
            {id: 1, name: '唐都医院血液科李医生', ranking: 3},
            {id: 2, name: '交大一附院王医生', ranking: 1}
        ]
    },
    {
        id: 2,
        name: '西京医院糖尿病病数据',
        price: 51200,
        size: '623 GB',
        users: [
            {id: 1, name: '唐都医院血液科李医生', ranking: 3},
            {id: 2, name: '交大一附院王医生', ranking: 1}
        ]
    },
    {
        id: 3,
        name: '西京医院高血压数据',
        price: 4633,
        size: '214 GB',
        users: [
            {id: 1, name: '唐都医院血液科李医生', ranking: 3},
            {id: 2, name: '交大一附院王医生', ranking: 1}
        ]
    }
];

class AccessManagement extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            openId: null,
            available: [false, false]
        }
    }

    isAvailable = id => {
        return this.state.available[id - 1]
    };

    enable = id => {
        this.state.available[id - 1] = !this.state.available[id - 1];
        this.setState({available: this.state.available});
    };

    isOpen = id => {
        return id === this.state.openId;
    };

    openCollapse = id => {
        this.setState({openId: id})
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.accessRoot}>
                <div>
                    <p>数据源访问管理</p>
                    <List>
                        <ListItem button>
                            <ListItemText><b>数据名称</b></ListItemText>
                            <ListItemText><b>数据大小</b></ListItemText>
                            <ListItemText><b>数据价格</b></ListItemText>
                            <ListItemText><b>收起/展开</b></ListItemText>
                        </ListItem>
                        {dataSources.map(ds => <React.Fragment>
                            <ListItem button>
                                <ListItemText>{ds.name}</ListItemText>
                                <ListItemText>{ds.size}</ListItemText>
                                <ListItemText>{ds.price}</ListItemText>
                                <ListItemText> {this.isOpen(ds.id) ?
                                    <ExpandLess onClick={() => this.openCollapse(-1)}/> :
                                    <ExpandMore onClick={() => this.openCollapse(ds.id)}/>}</ListItemText>
                            </ListItem>
                            <Collapse className={classes.collapse} in={this.isOpen(ds.id)}>
                                <ListItem button>
                                    <ListItemText><b>允许/禁止访问</b></ListItemText>
                                    <ListItemText><b>用户名</b></ListItemText>
                                    <ListItemText><b>用户信用级别</b></ListItemText>
                                </ListItem>
                                <List key={ds.id} component="div" disablePadding>
                                    {ds.users.map(user =>
                                        <ListItem button key={user.id}>
                                            <ListItemText> {this.isAvailable(user.id) ?
                                                <Available onClick={() => this.enable(user.id)}
                                                           className={classes.available}/> :
                                                <ForbiddenIcon onClick={() => this.enable(user.id)}
                                                               className={classes.forbidden}/>}</ListItemText>
                                            <ListItemText>{user.name}</ListItemText>
                                            <ListItemText>{user.ranking}</ListItemText>
                                        </ListItem>
                                    )}
                                </List>
                            </Collapse>
                        </React.Fragment>)
                        }
                    </List>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AccessManagement)
