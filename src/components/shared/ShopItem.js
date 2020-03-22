import React from "react";
import {Card, CardHeader, CardMedia, CardContent, Typography, Button, Avatar} from "@material-ui/core";
import {Phone, Email, Info} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

function ShopItem(props) {

    //name
    //owner
    //number
    //picture
    //description
    //category

    const useStyles = makeStyles({
        image: {
            height: 200,
            objectFit: true
        },
        button: {
            textAlign: "left"
        }
    });

    const classes = useStyles();

    return (
        <Card raised={true} elevation={2} variant="elevation">
            <CardHeader
                avatar={<Avatar src={props.shop.owner.image}/>}
                title={props.shop.owner.name}
                subheader={props.shop.location} action={<Info/>}
            />
            <CardMedia className={classes.image} component="img" image={props.shop.image}/>
            <CardContent>
                <Typography
                    variant="body1"
                    gutterBottom={true}>
                    {props.shop.description}
                </Typography>

                <Button className={classes.button} size="small" startIcon={<Phone/>}
                        fullWidth={false}>{props.shop.phone}</Button>

                <Button size="small" className={classes.button} startIcon={<Email/>} fullWidth={false}>
                    {props.shop.email}
                </Button>
            </CardContent>
        </Card>
    )
}

export default ShopItem;
