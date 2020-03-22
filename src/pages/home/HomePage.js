import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid, Typography, List} from "@material-ui/core";
import InstructionItem from "../../components/shared/InstructionItem";
import {makeStyles} from "@material-ui/styles";
import OrderItem from "../../components/shared/OrderItem";
import ShoppingListItem from "../../components/shared/ShoppingListItem";

function HomePage(props) {

    const instruction1 = {
        title: "Hand Washing",
        description: "Wash your hands every 20 minutes with soap and running water."
    };

    const instruction2 = {
        title: "Cough",
        description: "When coughing, cough into your elbow."
    };

    const instruction3 = {
        title: "Handshake",
        description: "Avoid handshakes as much as you can."
    };

    const instruction4 = {
        title: "Sickness",
        description: "If you feel sick, stay at home and call the emergency lines in your country."
    };

    const instruction5 = {
        title: "Water",
        description: "Drink a lot of water to hydrate your mouth."
    };
    const [instructions, setInstructions] = useState([instruction1, instruction2, instruction3, instruction4, instruction5]);

    const useStyles = makeStyles({
        root: {
            paddingTop: 30
        },
        gridContainer: {
            marginTop: 30,
            minHeight: "50vh"
        }
    });

    const order = {
        date: "2020-9-24",
        items: ["", "", ""],
        id: "10203"
    };

    const listItem = {
        name: "Apple",
        quantity: 50,
        description: "Freshly harvested red apples",
        status: "delivered",
        date: "2020-08-1"
    };

    const classes = useStyles();

    const [onRouteOrders, setOnRouteOrders] = useState([order, order, order, order, order, order]);
    const [deliveredOrders, setDeliveredOrders] = useState([order, order, order, order, order, order]);
    const [shoppingList, setShoppingList] = useState([listItem, listItem, listItem, listItem, listItem, listItem]);

    return (
        <Layout>
            <div className={classes.root}>
                <Container>
                    <Grid className={classes.gridContainer} justify="center" container={true}>
                        <Grid item={true}>
                            <List title="Things to do" subheader={"Things to do"}>
                                {instructions.map(function (instruction, index) {
                                    return (
                                        <InstructionItem key={index} instruction={instruction}/>
                                    )
                                })}
                            </List>
                        </Grid>
                    </Grid>

                    <Grid className={classes.gridContainer} item={true} direction="row" container={true} spacing={2}>
                        <Grid item={true} xs={12}>
                            <Typography variant="h4">Orders on its way</Typography>
                        </Grid>

                        {(onRouteOrders.length === 0) ? (
                            <Grid xs={12} className={classes.noShopsContainer} direction="column"
                                  alignItems="center"
                                  justify="center" container={true} item={true}>
                                <Typography align="center" variant="h6">No orders on its way</Typography>
                            </Grid>

                        ) : (
                            (onRouteOrders.map(function (order, index) {
                                return (
                                    <Grid key={index} item={true} xs={12} sm={12} md={4}>
                                        <OrderItem order={order}/>
                                    </Grid>
                                )
                            }))
                        )}
                    </Grid>

                    <Grid className={classes.gridContainer} item={true} direction="row" container={true} spacing={2}>
                        <Grid item={true} xs={12}>
                            <Typography variant="h4">Delivered</Typography>
                        </Grid>

                        {(deliveredOrders.length === 0) ? (
                            <Grid className={classes.noShopsContainer} direction="column" alignItems="center"
                                  justify="center" container={true} item={true}>
                                <Typography align="center" variant="h6">No orders delivered</Typography>
                            </Grid>

                        ) : (
                            (deliveredOrders.map(function (order, index) {
                                return (
                                    <Grid key={index} item={true} xs={12} sm={12} md={4}>
                                        <OrderItem order={order}/>
                                    </Grid>
                                )
                            }))
                        )}
                    </Grid>

                    <Grid className={classes.gridContainer} item={true} direction="row" container={true} spacing={2}>
                        <Grid item={true} xs={12}>
                            <Typography variant="h4">Shopping List</Typography>
                        </Grid>

                        {(shoppingList.length === 0) ? (
                            <Grid item={true} xs={12}>
                                <Container>
                                    <Typography align="center" variant="h6">No Shopping list made</Typography>
                                </Container>
                            </Grid>

                        ) : (
                            (shoppingList.map(function (listItem, index) {
                                return (
                                    <Grid key={index} item={true} xs={12} sm={12} md={4}>
                                        <ShoppingListItem listItem={listItem}/>
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

export default HomePage;
