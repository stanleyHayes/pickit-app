import React from "react";
import {Toolbar, Grid, Button, Typography, Avatar} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

function DesktopNavigationHeader(props) {

    const useStyles = makeStyles({
        container: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            flex: 1
        },
        title: {
            color: "purple"
        },
        navLinks: {
            flexGrow: 1
        },
        avatar: {},
        titleContainer: {},
        checkIcon: {
            color: "green",
            marginRight: 16
        },
        brandContainer: {
            display: "flex",
            alignItems: "center",
            paddingRight: 16
        }
    });

    const classes = useStyles();

    return (
        <Toolbar title="Heal the world" variant="regular">
            <div className={classes.container}>
                <div className={classes.brandContainer}>
                    <Typography className={classes.title} variant="h5">PickItApp</Typography>
                </div>
                <div>
                    <Grid item={true} container={true} direction="row" justify="center">
                        <Grid item={true}>
                            <Button variant="text">
                                <Link style={{textDecoration: "none"}} to="/">Home</Link>
                            </Button>
                        </Grid>

                        <Grid item={true}>
                            <Button variant="text">
                                <Link style={{textDecoration: "none"}} to="/list">List</Link>
                            </Button>
                        </Grid>

                        <Grid item={true}>
                            <Button variant="text">
                                <Link style={{textDecoration: "none"}} to="/shops">Shops</Link>
                            </Button>
                        </Grid>


                        <Grid item={true}>
                            <Button variant="text">
                                <Link style={{textDecoration: "none"}} to="/products">Products</Link>
                            </Button>
                        </Grid>


                        <Grid item={true}>
                            <Button variant="text">
                                <Link style={{textDecoration: "none"}} to="/orders">Orders</Link>
                            </Button>
                        </Grid>

                        <Grid item={true}>
                            <Button variant="text">
                                <Link style={{textDecoration: "none"}} to="/cart">Cart</Link>
                            </Button>
                        </Grid>

                        <Grid item={true}>
                            <Button variant="text">
                                <Link style={{textDecoration: "none"}} to="/account">Account</Link>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Avatar/>
                </div>
            </div>

        </Toolbar>
    )
}

export default DesktopNavigationHeader;
