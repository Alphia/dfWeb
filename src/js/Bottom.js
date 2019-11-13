import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";


const styles = {
    bottomRoot: {
        backgroundColor: 'rgb(51, 63, 72)',

    },
    linkWrapper:{
        display: 'flex',
        width:'1180px',
        margin:'auto',
        paddingTop:'4rem',
        color:'white',
        '& >div':{
            width: '16%'
        },
        '& b':{
            fontSize:'1.8rem'
        },
        '& p':{
            fontSize:'1.6rem'
        }
    }
};

class Bottom extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.bottomRoot}>
                <div className={classes.linkWrapper}>
                    <Box/>
                    <Box>
                        <b>联系我们</b>
                        <p>微博</p>
                        <p>微信</p>
                        <p>电子邮箱</p>
                        <p>电话 400-263151X</p>

                    </Box>
                    <Box>
                        someone
                    </Box>
                </div>
            </Paper>
        )
    }
}

export default withStyles(styles)(Bottom);
