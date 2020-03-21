import React from "react";
import {Card, CardHeader, CardMedia, CardContent, Typography, CardActions, Button} from "@material-ui/core";
import {Phone, Email} from "@material-ui/icons";

function ShopItem(props) {

    //name
    //owner
    //number
    //picture
    //description
    //category

    return (
        <Card raised={true} elevation={2} variant="elevation">
            <CardHeader
                avatar={props.shop.owner.image}
                title={props.shop.owner.name}
                subheader={props.shop.location}
            />
            <CardMedia image={props.shop.image}/>
            <CardContent>
                <Typography
                    variant="body1"
                    gutterBottom={true}>
                    {props.shop.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button>
                    <Phone/>
                </Button>

                <Button>
                    <Email/>
                </Button>
            </CardActions>
        </Card>
    )
}

export default ShopItem;
