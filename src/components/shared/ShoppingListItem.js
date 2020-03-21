import React from "react";
import {

    CardHeader,
    CardActions,
    Button,
    CardContent,
    Card,
    Typography
} from "@material-ui/core";

import {Edit, Delete, DoneAll, Done, CheckCircle} from "@material-ui/icons";


import {makeStyles} from "@material-ui/styles";

function ShoppingListItem({listItem, dispatch, handleListItemRemove}) {

    const {name,  quantity, status, description} = listItem;

    const useStyles = makeStyles({
        deleteIcon: {
            color: "red"
        }
    });

    const classes = useStyles();

    function handleDeleteClicked() {
        handleListItemRemove(listItem);
    }

    return (
        <Card elevation={2} raised={true} variant="elevation">
            <CardHeader
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
                <Button onClick={handleDeleteClicked}>
                    <Delete className={classes.red}/>
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
