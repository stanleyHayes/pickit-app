import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import ShopItem from "../../components/shared/ShopItem";

function ShopsPage(props) {

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
            minHeight: "100%"
        },
        noShopsContainer: {
            flex: 1,
            minHeight: "100%"
        }
    });


    const shop = {
        owner: {
            name: "Stanley Hayford",
            image: "https://5.imimg.com/data5/CE/GT/MY-35754189/fresh-apple-500x500.jpg"
        },
        phone: "+233270048319",
        image: "https://5.imimg.com/data5/CE/GT/MY-35754189/fresh-apple-500x500.jpg",
        description: "We serve all kinds of foods",
        category: "Restaurant",
        name: "Chop & Hop",
        email: "hayfordstanley@gmail.com",
        location: "Helsinki"
    };


    const [shops, setShops] = useState([shop, shop, shop, shop, shop, shop]);
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
                        justify={(shops.length === 0) ? "center" : "flex-start"}
                        alignItems={(shops.length === 0) ? "center" : "flex-start"}>

                        {(shops.length === 0) ? (
                            <Grid className={classes.noShopsContainer} direction="column" alignItems="center"
                                  justify="center" container={true} item={true}>
                                <Typography align="center" variant="h6">No Shops Available</Typography>
                            </Grid>

                        ) : (
                            (shops.map(function (shop, index) {
                                return (
                                    <Grid key={index} item={true} xs={12} sm={12} md={4}>
                                        <ShopItem shop={shop}/>
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

export default ShopsPage;
