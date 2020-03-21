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

function CreateProductPage(props) {

    const [product, setProduct] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    function handleProductSubmit(event) {
        event.preventDefault();
        setLoading(true);
    }

    function handleProductChange(event) {
        setProduct({...product, [event.target.name]: event.target.value});
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
                                <CardHeader title="New Product" subheader="Add new Product to your shop"/>
                                <CardContent>
                                    <Typography variant="overline">Name</Typography>
                                    <TextField
                                        value={product.name}
                                        onChange={handleProductChange}
                                        variant="outlined"
                                        type="text"
                                        placeholder="Enter Product name"
                                        label="Name"
                                        name="name"
                                        fullWidth={true}
                                        required={true}
                                        margin="dense"
                                        size="medium"
                                        error={error.productName ? "This field is required" : null}
                                    />

                                    <Typography variant="overline">Price</Typography>
                                    <TextField
                                        value={product.price}
                                        onChange={handleProductChange}
                                        variant="outlined"
                                        type="number"
                                        placeholder="Enter Product Price"
                                        label="Price"
                                        name="price"
                                        fullWidth={true}
                                        required={true}
                                        margin="dense"
                                        size="medium"
                                        helperText="Price of Product in Euros and cents"
                                        error={error.productPrice ? "This field is required" : null}
                                    />

                                    <Typography variant="overline">Quantity</Typography>
                                    <TextField
                                        value={product.quantity}
                                        onChange={handleProductChange}
                                        variant="outlined"
                                        type="number"
                                        placeholder="Enter Product quantity"
                                        label="Quantity"
                                        name="quantity"
                                        fullWidth={true}
                                        required={true}
                                        margin="dense"
                                        size="medium"
                                        helperText="Quantity of products available"
                                        error={error.productQuantity ? "This field is required" : null}
                                    />

                                    <Typography variant="overline" gutterBottom={true}>Category</Typography>
                                    <div>
                                        <Select
                                            defaultValue="Fruit"
                                            name="category"
                                            onChange={handleProductChange}
                                            value={product.category}
                                            variant="outlined"
                                            autoWidth={false}>
                                            <MenuItem value="Fruit" divider={true} title="Fruit">Fruit</MenuItem>
                                            <MenuItem value="Fruit" divider={true} title="Fruit">Fruit</MenuItem>
                                            <MenuItem value="Fruit" divider={true} title="Fruit">Fruit</MenuItem>
                                            <MenuItem value="Fruit" divider={true} title="Fruit">Fruit</MenuItem>
                                            <MenuItem value="Fruit" divider={true} title="Fruit">Fruit</MenuItem>
                                        </Select>
                                    </div>


                                    <Typography variant="overline">Description</Typography>
                                    <TextField
                                        value={product.description}
                                        onChange={handleProductChange}
                                        variant="outlined"
                                        type="text"
                                        placeholder="Enter Product description"
                                        label="Product Description"
                                        name="description"
                                        fullWidth={true}
                                        required={true}
                                        margin="dense"
                                        size="medium"
                                        multiline={true}
                                        rows={4}
                                        error={error.productDescription ? "This field is required" : null}
                                    />

                                    <Button
                                        variant="outlined"
                                        className={classes.button}
                                        disabled={loading}
                                        fullWidth={true}
                                        onClick={handleProductSubmit}
                                        onSubmit={handleProductSubmit}>Create Product</Button>
                                </CardContent>
                            </Card>
                        </form>

                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default CreateProductPage;
