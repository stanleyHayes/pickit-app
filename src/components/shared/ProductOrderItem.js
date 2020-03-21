import React from "react";
import {

    CardHeader,
    CardActions,
    Avatar,
    Button,
    Card,
} from "@material-ui/core";

import {Edit, Delete, DoneAll, Done, CheckCircle} from "@material-ui/icons";


import {makeStyles} from "@material-ui/styles";

function ProductOrderItem({listItem, dispatch}) {

    const {name, image, quantity, status} = listItem;

    const useStyles = makeStyles({});

    const classes = useStyles();

    return (
        <Card elevation={2} raised={true} variant="elevation">
            <CardHeader
                avatar={<Avatar src={image}/>}
                title={name}
                subheader={`${quantity} ${quantity === 1 ? "piece" : "pieces"}`}
            />
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

export default ProductOrderItem;
