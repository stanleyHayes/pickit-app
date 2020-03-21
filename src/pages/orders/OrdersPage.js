import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {makeStyles} from "@material-ui/styles";
import {Container, Grid, Typography} from "@material-ui/core";
import ProductItem from "../../components/shared/ProductItem";

function OrdersPage(props) {
    const useStyles = makeStyles({
        root: {
            flex: 1,
            backgroundColor: "whitesmoke",
            display: "flex",
            minHeight: "95vh"
        },
        container: {
            flex: 1,
            minHeight: "100%"
        },
        noShopsContainer: {
            flex: 1,
            minHeight: "100%"
        }
    });

    const [orders, setOrders] = useState([]);
    const classes = useStyles();

    return (
        <Layout>
            <div className={classes.root}>
                <Container>
                    <Grid
                        className={classes.container}
                        direction="column"
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
                            (orders.map(function (list, index) {
                                return (
                                    <Grid key={index} item={true} xs={12} sm={12} md={6}>
                                        <ProductItem list={list}/>
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
