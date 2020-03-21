import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {
    Grid,
    Card,
    Button,
    MenuItem,
    CardContent,
    Container,
    Typography,
    TextField,
    Select,
    CardHeader
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

function CreateShopPage(props) {

    const [shop, setShop] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    function handleShopSubmit(event) {
        event.preventDefault();
        setLoading(true);
    }

    function handleShopChange(event) {
        setShop({...shop, [event.target.name]: event.target.value});
        console.log(event.target.name, event.target.value);
    }

    const useStyles = makeStyles({
        root: {
            minHeight: "93vh",
        },
        gridContainer: {
            flex: 1,
            minHeight: "93vh",
        },
        gridItem: {
            flex: 1
        },
        button: {
            backgroundColor: "blue",
            color: "white"
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.root}>
                <Grid className={classes.gridContainer} container={true} justify={"center"} alignItems="center">
                    <Grid className={classes.gridItem} item={true} xs={12} md={8} lg={6}>
                        <form>
                            <Card raised={true} elevation={2} variant="elevation">
                                <CardHeader title="New Shop" subheader="Add new Shop"/>
                                <CardContent>
                                    <Typography variant="overline">Name</Typography>
                                    <TextField
                                        value={shop.name}
                                        onChange={handleShopChange}
                                        variant="outlined"
                                        type="text"
                                        placeholder="Enter Shop name"
                                        label="Name"
                                        name="name"
                                        fullWidth={true}
                                        required={true}
                                        margin="dense"
                                        size="medium"
                                        error={error.name ? "This field is required" : null}
                                    />

                                    <Typography variant="overline">Address</Typography>
                                    <TextField
                                        value={shop.description}
                                        onChange={handleShopChange}
                                        variant="outlined"
                                        type="text"
                                        placeholder="Enter Shop address"
                                        label="Shop Address"
                                        name="address"
                                        fullWidth={true}
                                        required={true}
                                        margin="dense"
                                        size="medium"
                                        multiline={true}
                                        rows={4}
                                        error={error.address ? "This field is required" : null}
                                    />

                                    <Typography variant="overline">Description</Typography>
                                    <TextField
                                        value={shop.description}
                                        onChange={handleShopChange}
                                        variant="outlined"
                                        type="text"
                                        placeholder="Enter Shop description"
                                        label="Shop Description"
                                        name="description"
                                        fullWidth={true}
                                        required={true}
                                        margin="dense"
                                        size="medium"
                                        multiline={true}
                                        rows={4}
                                        error={error.description ? "This field is required" : null}
                                    />

                                    <Button
                                        variant="outlined"
                                        className={classes.button}
                                        disabled={loading}
                                        fullWidth={true}
                                        onClick={handleShopSubmit}
                                        onSubmit={handleShopSubmit}>Create Shop</Button>
                                </CardContent>
                            </Card>
                        </form>

                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default CreateShopPage;
