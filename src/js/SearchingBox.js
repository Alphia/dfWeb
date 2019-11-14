import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";


const styles = {
    root: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        '& svg': {
            fontSize: '2rem',
        }
    },
    select: {
        fontSize: '1.8rem',
        paddingLeft: '0.8rem',
        '&:before': {
            borderBottom: '0'
        },
    },
    item: {
        fontSize: '1.6rem',
    },
    input: {
        flex: 1,
        fontSize: '1.8rem',
        paddingLeft: '0.8rem',
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: '2rem',
        margin: 4,
    },
};

class SearchingBox extends React.Component {

    search = () => {
        this.props.onSearch();
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedValue: 10
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <Paper component="div" className={classes.root}>
                <Select className={classes.select} value={this.state.selectedValue}
                        onChange={ev => this.setState({selectedValue: ev.target.value})}>
                    <MenuItem className={classes.item} value={10}>数据名称</MenuItem>
                    <MenuItem className={classes.item} value={20}>数据来源</MenuItem>
                </Select>
                <Divider className={classes.divider} orientation="vertical"/>
                <InputBase
                    className={classes.input}
                    placeholder={this.state.selectedValue === 10 ? '请输入数据名称，如"眼疾"' : '请输入数据来源，如"西京医院"'}
                />
                <Divider className={classes.divider} orientation="vertical"/>
                <IconButton type="button" className={classes.iconButton} aria-label="search" onClick={this.search}>
                    <SearchIcon/>
                </IconButton>
            </Paper>
        )
    }
}

export default withStyles(styles)(SearchingBox)
