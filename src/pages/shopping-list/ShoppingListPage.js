import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid, Typography} from "@material-ui/core";
import ShopItem from "../../components/shared/ShopItem";
import {makeStyles} from "@material-ui/styles";
import ShoppingListItem from "../../components/shared/ShoppingListItem";

function ShoppingListPage(props) {

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

    const listItem = {
        name: "Apple",
        quantity: 50,
        description: "Freshly harvested red apples",
        status: "delivered",
        date: "2020-08-1"
    };

    const [shoppingList, setShoppingList] = useState([listItem, listItem, listItem, listItem, listItem, listItem, listItem]);
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
                        justify={(shoppingList.length === 0) ? "center" : "flex-start"}
                        alignItems={(shoppingList.length === 0) ? "center" : "flex-start"}>

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
                </Container>
            </div>

        </Layout>
    )
}

export default ShoppingListPage;
