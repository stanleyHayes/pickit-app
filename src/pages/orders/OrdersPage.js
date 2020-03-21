import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {makeStyles} from "@material-ui/styles";
import {Container, Grid, Typography} from "@material-ui/core";
import ProductItem from "../../components/shared/ProductItem";
import OrderItem from "../../components/shared/OrderItem";

function OrdersPage(props) {
    const useStyles = makeStyles({
        root: {
            flex: 1,
            backgroundColor: "whitesmoke",
            display: "flex",
            minHeight: "95vh",
            paddingTop: 30
        },
        container: {
            flex: 1,
        },
        noShopsContainer: {
            flex: 1,
            minHeight: "100%"
        }
    });

    const order = {
        date: "2020-9-24",
        items: [],
        id: "10203"
    };

    const [orders, setOrders] = useState([order, order, order, order, order, order, order, order, order, order, order, order, order, order, order]);
    const classes = useStyles();

    return (
        <Layout>
            <div className={classes.root}>
                <Container>
                    <Grid
                        className={classes.container}
                        direction="row"
                        spacing={2}
                        container={true}
                        justify={(orders.length === 0) ? "center" : "flex-start"}
                        alignItems={(orders.length === 0) ? "center" : "flex-start"}>

                        {(orders.length === 0) ? (
                            <Grid className={classes.noShopsContainer} direction="column" alignItems="center"
                                  justify="center" container={true} item={true}>
                                <Typography align="center" variant="h6">No orders available</Typography>
                            </Grid>

                        ) : (
                            (orders.map(function (order, index) {
                                return (
                                    <Grid key={index} item={true} xs={12} sm={12} md={3}>
                                        <OrderItem order={order}/>
                                    </Grid>
                                )
                            }))
                        )}
                    </Grid>
                </Container>
            </div>

        </Layout>
    )
}

export default OrdersPage;
