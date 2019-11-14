import React from "react";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";


const styles = {
        linksRoot: {
            display: 'flex',
            width: '100%',
            padding: '3rem',
            color: 'white',
            '& >div': {
                width: '20%'
            },
            '& :first-child': {
                marginLeft: '6%'
            },
            '& b': {
                fontSize: '1.8rem'
            },
            '& a': {
                fontSize: '1.6rem',
                color: 'white',
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                },
            },
        }
    }
;

class Links extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.linksRoot}>
                <Box>
                    <b>了解我们</b>
                    <p><a href='/public/'>微博</a></p>
                    <p><a href='#'>博客</a></p>
                    <p><a href='#'>关于我们</a></p>
                    <p><a href='#'>加入我们</a></p>
                </Box>
                <Box>
                    <b>链接</b>
                    <p><a href='#'>西安交通大学</a></p>
                    <p><a href='#'>交大数学院</a></p>
                    <p><a href='#'>西安交大大数据实验室</a></p>
                    <p><a href='#'>西安交大区块链技术创新中心</a></p>
                </Box>
                <Box>
                    <b>联系我们</b>
                    <p><a href='#'>微博</a></p>
                    <p><a href='#'>微信</a></p>
                    <p><a href='#'>电子邮箱</a></p>
                    <p><a href='#'>电话 400-8266000</a></p>
                </Box>
                <Box>
                    <b>联系我们</b>
                    <p><a href='#'>微博</a></p>
                    <p><a href='#'>微信</a></p>
                    <p><a href='#'>电子邮箱</a></p>
                    <p><a href='#'>电话 400-8266000</a></p>
                </Box>
            </div>
        )
    }
}

export default withStyles(styles)(Links);
