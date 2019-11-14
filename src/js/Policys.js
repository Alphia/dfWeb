import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";


const styles = {
        linksRoot: {
            width: '100%',
            padding: '3rem 0',
            color: 'white',
            '& b': {
                fontSize: '1.8rem'
            },
            '& span': {
                fontSize: '1.4rem',
                margin: '0.2rem 0.5rem 0.2rem 0',
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

class Polices extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.linksRoot}>
                <div className="tb-footer-bd">
                    <p>
                        <span><a>法律声明</a></span>
                        <span><a>知识产权</a></span>
                        <span><a>隐私权政策</a></span>
                        <span><a>联系客服</a></span>
                        <span><a>合作伙伴</a></span>
                        <span><a>营销中心</a></span>
                        <span><a>廉正举报</a></span>
                        <span><a>开放平台</a></span>
                        <span>|</span>
                        <span><em>© 2018-现在 datashop.com 版权所有</em></span>
                    </p>
                    <p>
                        <span><a href="/public">增值电信业务经营许可证：陕B2-20080224</a></span>
                        <span>|</span>
                        <span><a href="/public">增值电信业务经营许可证（跨地区）： B2-20150210</a></span>
                    </p>
                    <p>
                        <span>陕网文（2019）1033-086号</span>
                        <span>|</span>
                        <span>陕西省数据安全销售第三方平台提供者备案：陕数安A33010001</span>
                    </p>
                    <p>
                        <span>互联网信息服务资格证书（陕）-经营性-2018-0010</span>
                        <span>|</span>
                        <span>短消息类服务接入代码使用证书：号【2016】00154-A01</span>
                        <span>信息网络传播视听许可证：1109364号</span>
                        <span>|</span>
                        <span>出版物网络交易平台服务经营备案号：新出发陕备字第012号</span>
                    </p>
                    <p>
                        <span>陕公网安备 33010002000078号</span>
                        <span>|</span>
                        <span>广播电视节目制作经营许可证（陕）字第01012号</span>
                        <span>市场名称登记证：工商网市字3301004120号</span>
                        <span>|</span>
                        <span>医疗器械网络交易服务第三方平台备案：（陕）网械平台备字[2018]第00004号</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Polices);
