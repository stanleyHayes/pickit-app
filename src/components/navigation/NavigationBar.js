import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {useMediaQuery} from "@material-ui/core";

import "../../App.css";
import MobileNavigationHeader from "./MobileNavigationHeader";
import DesktopNavigationHeader from "./DesktopNavigationHeader";
import {makeStyles} from "@material-ui/styles";

function NavigationBar(props) {

    const mobileScreen = useMediaQuery('(max-width: 800px)');

    const useStyles = makeStyles({
        root: {
            backgroundColor: "white"
        }
    });

    const classes = useStyles();
    return (
        <AppBar className={classes.root} variant="elevation" elevation={2}>
            {
                (mobileScreen) ?
                    (<MobileNavigationHeader/>) :
                    (<DesktopNavigationHeader/>)
            }
        </AppBar>
    )
}

export default NavigationBar;
