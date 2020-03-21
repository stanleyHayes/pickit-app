import React from "react";
import {

    CardHeader,
    CardActions,
    Button,
    CardContent,
    Card,
    Typography,
    Divider
} from "@material-ui/core";

import {Edit, Delete, DoneAll, Done, CheckCircle} from "@material-ui/icons";


import {makeStyles} from "@material-ui/styles";

function ShoppingListItem({listItem, dispatch, handleListItemRemove}) {

    const {name,  quantity, status, description, date} = listItem;

    const useStyles = makeStyles({
        delete: {
            color: "red"
        },
        doneAll: {
            color: "green"
        },
        done: {
            color: "orange"
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
                subheader={new Date(date).toDateString()}
            />
            <CardContent>
                <Typography variant="body1">{`${quantity} ${quantity === 1 ? "piece" : "pieces"}`}</Typography>
                <Typography variant="body1">{description}</Typography>
                <Divider variant="fullWidth" />
            </CardContent>
            <CardActions>
                <Button>
                    <Edit/>
                </Button>
                <Button onClick={handleDeleteClicked}>
                    <Delete className={classes.delete}/>
                </Button>
                <Button>
                    {(status === "bought") ? (<DoneAll className={classes.doneAll}/>)
                        :
                        (status === "delivered" ? (<CheckCircle className={classes.doneAll}/>) : (<Done className={classes.done}/>))}
                </Button>
            </CardActions>
        </Card>
    )
}

export default ShoppingListItem;
