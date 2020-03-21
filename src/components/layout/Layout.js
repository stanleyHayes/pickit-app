import React, {useState} from "react";
import NavigationBar from "../navigation/NavigationBar";
import {SpeedDial, SpeedDialAction} from "@material-ui/lab";
import {PostAdd, Add} from "@material-ui/icons";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles({
    addAgendaButton: {
        position: "fixed",
        right: 16,
        bottom: 16
    }
});

function Layout(props) {

    const classes = useStyles();

    const history = useHistory();

    const [speedDialOpen, setSpeedDialOpen] = useState(false);

    function handleSpeedDialClicked() {
        setSpeedDialOpen(!speedDialOpen);
    }

    function handleAddShopClicked() {
        history.push("/new/shop");
    }

    function handleAddProductClicked() {
        history.push("/new/product");
    }

    function handleAddListClicked() {
        history.push("/new/list");
    }

    function handleSpeedDialClose() {
        setSpeedDialOpen(false);
    }

    return (
        <div>
            <div>
                <NavigationBar/>
            </div>

            <div style={{marginTop: 50}}>
                {props.children}
            </div>

            <div className={classes.addAgendaButton}>
                <SpeedDial
                    onClose={handleSpeedDialClose}
                    onClick={handleSpeedDialClicked}
                    icon={<Add/>}
                    open={speedDialOpen} ariaLabel="Speed Dial">

                    <SpeedDialAction
                        open={speedDialOpen}
                        onClick={handleAddListClicked}
                        title="Add List"
                        tooltipOpen={true}
                        tooltipTitle={<Typography variant="overline">List</Typography>}
                        tooltipPlacement="left"
                        icon={<PostAdd/>}/>

                    <SpeedDialAction
                        open={speedDialOpen}
                        onClick={handleAddShopClicked}
                        title="Add Agenda"
                        tooltipOpen={true}
                        tooltipTitle={<Typography variant="overline">Shop</Typography>}
                        tooltipPlacement="left"
                        icon={<PostAdd/>}/>

                    <SpeedDialAction
                        open={speedDialOpen}
                        onClick={handleAddProductClicked}
                        title="Add Agenda"
                        tooltipOpen={true}
                        tooltipTitle={<Typography variant="overline">Product</Typography>}
                        tooltipPlacement="left"
                        icon={<PostAdd/>}/>

                </SpeedDial>
            </div>
        </div>
    )
}

export default Layout;
