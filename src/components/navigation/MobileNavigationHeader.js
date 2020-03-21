import React, {useState} from "react";
import {Toolbar, Typography, Avatar, Button, Drawer} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import DrawerContent from "./DrawerContent";

function MobileNavigationHeader() {

    const [drawerOpened, setDrawerOpened] = useState(false);

    const useStyles = makeStyles({
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1
        },
        titleContainer: {
            flexGrow: 1
        },
        title: {
            color: "purple"
        }
    });

    const classes = useStyles();

    function handleMenuItemClicked() {
        setDrawerOpened(true);
    }


    function handleDrawerClose() {
        setDrawerOpened(false);
    }

    return (
        <Toolbar variant="regular">
            <div className={classes.container}>
                <div>
                    <Button onClick={handleMenuItemClicked}>
                        <Menu/>
                    </Button>
                </div>
                <div className={classes.header}>
                    <Typography className={classes.title} variant="h5">CoVid-19</Typography>
                </div>
                <div>
                    <Avatar/>
                </div>
            </div>

            <Drawer open={drawerOpened} elevation={4} anchor="left" onClose={handleDrawerClose}>
                <DrawerContent handleDrawerClose={handleDrawerClose}/>
            </Drawer>
        </Toolbar>
    )
}

export default MobileNavigationHeader;
