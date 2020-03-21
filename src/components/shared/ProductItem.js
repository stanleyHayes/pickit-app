import React from "react";
import {Card, CardHeader, CardMedia, CardContent, Typography, CardActions, Button} from "@material-ui/core";
import {ShoppingBasket, Info} from "@material-ui/icons";

function ProductItem(props) {

    //name
    //price
    //picture
    //description
    //category
    //status
    //price
    //status

    return (
        <Card raised={true} elevation={2} variant="elevation">
            <CardHeader
                avatar={props.product.image}
                title={props.product.name}
                subheader={props.product.category}
            />
            <CardMedia image={props.shop.image}/>
            <CardContent>
                <Typography
                    variant="overline"
                    gutterBottom={true}>
                    {props.product.status}
                </Typography>

                <Typography
                    variant="h3"
                    gutterBottom={true}>
                    {props.product.price.amount}
                </Typography>

                <Typography
                    variant="body1"
                    gutterBottom={true}>
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
