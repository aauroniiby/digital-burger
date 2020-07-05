import React from 'react'
import classes from './CardItem.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const CardItem = (props) => (
    <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                component="img"
                alt={props.name}
                height="140"
                image={props.img}
                title={props.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            {/* <Button size="small" color="primary">
                Share
        </Button>
            <Button size="small" color="primary">
                Learn More
        </Button> */}
        </CardActions>
    </Card>
)

export default CardItem