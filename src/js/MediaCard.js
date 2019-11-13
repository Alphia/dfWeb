import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";


const styles = {
    card: {
        width: 265,
        marginLeft: '3rem',
        boxSizing: 'border-box',
    },
    media: {
        height: 180,
        '& img':{
            backgroundColor:"rgb(234, 237, 237)"
        }
    },
};

class MediaCard extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {classes, model} = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={model.media.imgUrl}
                        title={model.media.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            {model.content.title}
                        </Typography>
                        <Typography variant="inherit" color="textSecondary" component="p">
                            {model.content.introduction}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="large" color="primary">
                        Share
                    </Button>
                    <Button size="large" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(MediaCard);
