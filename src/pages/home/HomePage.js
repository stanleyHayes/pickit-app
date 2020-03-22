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
            marginTop: 30
        },
        button: {
            textAlign: "left"
        }
    });

    const classes = useStyles();

    const [onRouteOrders, setOnRouteOrders] = useState([]);
    const [deliveredOrders, setDeliveredOrders] = useState([]);
    const [shoppingList, setShoppingList] = useState([]);

    return (
        <Layout>
            <div className={classes.root}>
                <Container>
                    <Grid container={true} spacing={3} direction="column" justify="center" alignItems="flex-start">
                        <Grid item={true}>
                            <List title="Things to do">
                                {instructions.map(function (instruction, index) {
                                    return (
                                        <InstructionItem key={index} instruction={instruction}/>
                                    )
                                })}
                            </List>
                        </Grid>
                        <Grid item={true} container={true}>
                            <Grid>
                                <Typography variant="h4">Orders on its way</Typography>
                            </Grid>

                            {(onRouteOrders.length === 0) ? (
                                <Grid className={classes.noShopsContainer} direction="column" alignItems="center"
                                      justify="center" container={true} item={true}>
                                    <Typography align="center" variant="h6">No orders on its way</Typography>
                                </Grid>

                            ) : (
                                (onRouteOrders.map(function (order, index) {
                                    return (
                                        <Grid key={index} item={true} xs={12} sm={12} md={3}>
                                            <OrderItem order={order}/>
                                        </Grid>
                                    )
                                }))
                            )}
                        </Grid>

                        <Grid item={true}>
                            <Grid>
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
                                        <Grid key={index} item={true} xs={12} sm={12} md={3}>
                                            <OrderItem order={order}/>
                                        </Grid>
                                    )
                                }))
                            )}
                        </Grid>

                        <Grid item={true} container={true}>
                            <Grid>
                                <Typography variant="h4">Delivered</Typography>
                            </Grid>

                            {(shoppingList.length === 0) ? (
                                <Grid className={classes.noShopsContainer} direction="column" alignItems="center"
                                      justify="center" container={true} item={true}>
                                    <Typography align="center" variant="h6">No Shopping list made</Typography>
                                </Grid>

                            ) : (
                                (shoppingList.map(function (listItem, index) {
                                    return (
                                        <Grid key={index} item={true} xs={12} sm={12} md={3}>
                                            <ShoppingListItem listItem={listItem}/>
                                        </Grid>
                                    )
                                }))
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Layout>
    )
}

export default HomePage;
