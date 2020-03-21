import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {makeStyles} from "@material-ui/styles";
import {Container, Grid, Typography} from "@material-ui/core";
import ProductItem from "../../components/shared/ProductItem";

function ProductsPage(props) {
    const useStyles = makeStyles({
        root: {
            flex: 1,
            backgroundColor: "whitesmoke",
            display: "flex",
            minHeight: "83vh",
            paddingTop: 30
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

    let product =
        {
            name: 'Apple',
            price: 20,
            image: "https://5.imimg.com/data5/CE/GT/MY-35754189/fresh-apple-500x500.jpg",
            description: "Red Apple",
            category: "Fruit",
            status: "available"
        };

    const [products, setProducts] = useState([product, product, product, product, product, product]);
    const classes = useStyles();

    return (
        <Layout>
            <div className={classes.root}>
                <Container>
                    <Grid
                        className={classes.container}
                        direction="row"
                        spacing={3}
                        container={true}
                        justify={(products.length === 0) ? "center" : "flex-start"}
                        alignItems={(products.length === 0) ? "center" : "flex-start"}>

                        {(products.length === 0) ? (
                            <Grid className={classes.noShopsContainer} direction="column" alignItems="center"
                                  justify="center" container={true} item={true}>
                                <Typography align="center" variant="h6">No Products available</Typography>
                            </Grid>

                        ) : (
                            (products.map(function (product, index) {
                                return (
                                    <Grid key={index} item={true} xs={12} sm={12} md={3}>
                                        <ProductItem product={product}/>
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

export default ProductsPage;
