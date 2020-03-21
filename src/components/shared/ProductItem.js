import React from "react";
import {Card, CardHeader, CardMedia, CardContent, Typography, CardActions, Button, Avatar} from "@material-ui/core";
import {ShoppingBasket, Info} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

function ProductItem(props) {

    //name
    //price
    //picture
    //description
    //category
    //status
    //price
    //status

    const useStyles = makeStyles({
        image: {
            height: 150,
            objectFit: true
        }
    });

    const classes = useStyles();
    return (
        <Card raised={true} elevation={2} variant="elevation">
            <CardHeader
                avatar={<Avatar src={props.product.image}/>}
                title={props.product.name}
                subheader={props.product.category}
            />
            <CardMedia
                className={classes.image}
                component="img"
                image={props.product.image}
            />
            <CardContent>
                <Typography
                    variant="overline">
                    {props.product.status}
                </Typography>

                <Typography
                    variant="h3">
                    $ {props.product.price}
                </Typography>

                <Typography
                    variant="body1">
                    {props.product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button>
                    <ShoppingBasket/>
                </Button>

                <Button>
                    <Info/>
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductItem;
