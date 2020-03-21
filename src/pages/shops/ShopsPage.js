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

    const [shops, setShops] = useState([]);
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
                        justify={(shops.length === 0) ? "center": "flex-start"}
                        alignItems={(shops.length === 0) ? "center": "flex-start"}>

                        {(shops.length === 0) ? (
                            <Grid className={classes.noShopsContainer} direction="column" alignItems="center"
                                  justify="center" container={true} item={true}>
                                <Typography align="center" variant="h6">No Shops Available</Typography>
                            </Grid>

                        ) : (
                            (shops.map(function (shop, index) {
                                return (
                                    <Grid key={index} item={true} xs={12} sm={12} md={6}>
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
