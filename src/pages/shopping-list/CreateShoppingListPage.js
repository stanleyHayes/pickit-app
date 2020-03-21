import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Card, Grid, Container, CardContent, Typography, TextField, List, Button} from "@material-ui/core";
import ShoppingListItem from "../../components/shared/ShoppingListItem";
import {makeStyles} from "@material-ui/styles";

function CreateShoppingListPage(props) {

    const [shoppingList, setShoppingList] = useState([]);
    const [listItem, setListItem] = useState({});
    const [error, setError] = useState({});

    function handleListItemChange(event) {
        setListItem({...listItem, [event.target.name]: event.target.value});
    }

    function handleListItemAdd() {
        setShoppingList([...shoppingList, listItem]);
        setListItem({name: "", description: "", quantity: ""})
    }

    function handleListItemRemove(itemToRemove) {
        const updatedList = shoppingList.filter(function (listItem) {
            console.log(itemToRemove, listItem);
            return listItem.name !== itemToRemove.name;
        });
        setShoppingList(updatedList);
    }

    const useStyles = makeStyles({
        noListItemContainer: {
            backgroundColor: "whitesmoke"
        },
        root: {
            marginTop: 80
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container>
                <Grid
                    className={classes.root}
                    spacing={4}
                    container={true}
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <Grid item={true} xs={12} md={8} lg={6}>
                        <form>
                            <Card raised={true} elevation={2} variant="elevation">
                                <CardContent>
                                    <Typography variant="overline">Product Name</Typography>
                                    <TextField
                                        fullWidth={true}
                                        value={listItem.name}
                                        onChange={handleListItemChange}
                                        placeholder="Product Name"
                                        type="text"
                                        required={true}
                                        name="name"
                                        label="name"
                                        margin="dense"
                                        variant="outlined"
                                        error={error.name ? "This field is required" : null}
                                        size="medium"
                                    />
                                    <Typography variant="overline">Quantity</Typography>
                                    <TextField
                                        fullWidth={true}
                                        value={listItem.quantity}
                                        onChange={handleListItemChange}
                                        placeholder="Quantity"
                                        label="Quantity"
                                        variant="outlined"
                                        type="number"
                                        required={true}
                                        name="quantity"
                                        margin="dense"
                                        error={error.name ? "This field is required" : null}
                                        size="medium"
                                    />

                                    <Typography variant="overline">Order Description</Typography>
                                    <TextField
                                        fullWidth={true}
                                        value={listItem.description}
                                        onChange={handleListItemChange}
                                        placeholder="Describe your preference"
                                        type="text"
                                        rows={4}
                                        label="Description"
                                        required={false}
                                        variant="outlined"
                                        multiline={true}
                                        name="description"
                                        margin="dense"
                                        error={error.name ? "This field is required" : null}
                                        size="medium"
                                    />

                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={handleListItemAdd}
                                        fullWidth={true}>
                                        Add To List
                                    </Button>
                                </CardContent>
                            </Card>
                        </form>
                    </Grid>
                    <Grid justify="center"
                          container={true}
                          className={classes.noListItemContainer}
                          item={true}
                          xs={12}
                          md={8} lg={6}>
                        {(shoppingList.length === 0) ? (
                            <Typography variant="subtitle2" align="center">No items in your list</Typography>
                        ) : (
                            (shoppingList.map(function (listItem, index) {
                                return (
                                    <Grid xs={12} item={true} key={index}>
                                        <ShoppingListItem
                                            handleListItemRemove={handleListItemRemove}
                                            listItem={listItem}
                                        />
                                    </Grid>
                                )
                            }))
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default CreateShoppingListPage;
