import React from "react";
import {Card, CardHeader, CardContent, Typography} from "@material-ui/core";
import {Info} from "@material-ui/icons";

function OrderItem(props) {
    return (
        <Card>
            <CardHeader
                title={props.order.id}
                action={<Info/>}
                subheader={new Date(props.order.date).toDateString()}
            />
            <CardContent>
                <Typography variant="body1">{`${props.order.items.length} items contained in order`}</Typography>
            </CardContent>
        </Card>
    )
}

export default OrderItem
