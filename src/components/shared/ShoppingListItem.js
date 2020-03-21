import React from "react";
import {

    CardHeader,
    CardActions,
    Avatar,
    Button,
    CardContent,
    Card,
    Typography
} from "@material-ui/core";

import {Edit, Delete, DoneAll, Done, CheckCircle} from "@material-ui/icons";


import {makeStyles} from "@material-ui/styles";

function ShoppingListItem({listItem, dispatch}) {

    const {name, image, quantity, status, description} = listItem;

    const useStyles = makeStyles({

    });

    const classes = useStyles();

    return (
        <Card elevation={2} raised={true} variant="elevation">
            <CardHeader
                avatar={<Avatar src={image}/>}
                title={name}
                subheader={`${quantity} ${quantity === 1 ? "piece" : "pieces"}`}
            />
            <CardContent>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
            <CardActions>
                <Button>
                    <Edit/>
                </Button>
                <Button>
                    <Delete/>
                </Button>
                <Button>
                    {(status === "bought") ? (<DoneAll/>)
                        :
                        (status === "delivered" ? (<CheckCircle/>) : (<Done/>))}
                </Button>
            </CardActions>
        </Card>
    )
}

export default ShoppingListItem;
