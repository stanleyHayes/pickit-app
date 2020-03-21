import React from "react";
import {Card, CardHeader, CardActions, Button} from "@material-ui/core";
import {Info} from "@material-ui/icons";

function OrderItem(props) {
    return (
        <Card>
            <CardHeader
                title={props.order.id}
                subheader={`${props.order.items.length} items`}
            />
            <CardActions>
                <Button>
                    <Info/>
                </Button>
            </CardActions>
        </Card>
    )
}

export default OrderItem
