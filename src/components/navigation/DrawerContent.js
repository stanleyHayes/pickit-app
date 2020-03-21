import React, {useState} from "react";
import {Container, Grid, Avatar, ListItemAvatar, ListItem, ListItemText, List} from "@material-ui/core";
import {
    Face,
    CheckCircle,
    CheckOutlined,
    FormatListNumbered,
    Timeline,
    DeleteForever,
    ExitToApp,
    Edit,
    LockOpen
} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {Link, useHistory} from "react-router-dom";

const useStyles = makeStyles({
    avatar: {
        width: "200px",
        height: "200px"
    },
    container: {
        marginTop: "16px"
    },
    profileIcon: {
        color: "blue"
    },
    agendaIcon: {
        color: "purple"
    },
    completedIcon: {
        color: "green"
    },
    uncompletedIcon: {
        color: "orangered"
    },
    timelineIcon: {
        color: "brown"
    },
    logoutIcon: {
        color: "pink"
    },
    changePasswordIcon: {
        color: "orange"
    },
    deleteIcon: {
        color: "red"
    },
    editProfileIcon: {
        color: "grey"
    },
    link: {
        textDecoration: "none"
    }

});


function DrawerContent() {

    const classes = useStyles();

    function handleDeleteAccountClicked(event) {

    }


    function handleLogoutClicked(event) {

    }

    return (
        <Container>
            <Grid
                container={true}
                direction="column"
                alignItems="center"
                justify="flex-start"
                spacing={4}
                className={classes.container}>

                <Grid item={true}>
                    <Avatar className={classes.avatar}/>
                </Grid>

                <Grid item={true}>
                    <List>
                        <ListItem divider={true} button={true} id="profile">
                            <ListItemAvatar>
                                <Face className={classes.profileIcon}/>
                            </ListItemAvatar>
                            <Link className={classes.link} to="/profile">
                                <ListItemText primary="Stanley" secondary="Profile"/>
                            </Link>
                        </ListItem>

                        <ListItem divider={true} button={true} id="home">
                            <ListItemAvatar>
                                <FormatListNumbered className={classes.agendaIcon}/>
                            </ListItemAvatar>
                            <Link className={classes.link} to="/">
                                <ListItemText primary="Home"/>
                            </Link>
                        </ListItem>

                        <ListItem
                            divider={true} button={true} id="list">
                            <ListItemAvatar>
                                <CheckCircle className={classes.completedIcon}/>
                            </ListItemAvatar>
                            <Link className={classes.link} to="/list">
                                <ListItemText primary="Shopping list"/>
                            </Link>
                        </ListItem>

                        <ListItem
                            divider={true} button={true}
                            id="shops">
                            <ListItemAvatar>
                                <CheckOutlined className={classes.uncompletedIcon}/>
                            </ListItemAvatar>
                            <Link className={classes.link} to="/shops">
                                <ListItemText primary="Shops"/>
                            </Link>
                        </ListItem>

                        <ListItem
                            divider={true} button={true}
                            id="products">
                            <ListItemAvatar>
                                <Timeline className={classes.timelineIcon}/>
                            </ListItemAvatar>
                            <Link className={classes.link} to="/products">
                                <ListItemText primary="Products"/>
                            </Link>
                        </ListItem>

                        <ListItem
                            divider={true} button={true}
                            id="orders">
                            <ListItemAvatar>
                                <CheckOutlined className={classes.uncompletedIcon}/>
                            </ListItemAvatar>
                            <Link className={classes.link} to="/orders">
                                <ListItemText primary="Orders"/>
                            </Link>
                        </ListItem>

                        <ListItem
                            divider={true} button={true} id="cart">
                            <ListItemAvatar>
                                <CheckCircle className={classes.completedIcon}/>
                            </ListItemAvatar>
                            <Link className={classes.link} to="/cart">
                                <ListItemText primary="Cart"/>
                            </Link>
                        </ListItem>

                        <ListItem
                            divider={true} button={true}
                            id="account">
                            <ListItemAvatar>
                                <CheckCircle className={classes.completedIcon}/>
                            </ListItemAvatar>
                            <Link className={classes.link} to="/account">
                                <ListItemText primary="Account"/>
                            </Link>
                        </ListItem>
                    </List>
                </Grid>

                <Grid>
                    <List dense={false} draggable={true}>
                        <ListItem onClick={handleLogoutClicked}
                                  divider={true} button={true}
                                  id="logout">
                            <ListItemAvatar>
                                <ExitToApp className={classes.logoutIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Logout"/>
                        </ListItem>

                        <ListItem
                            divider={true} button={true}
                            id="editprofile">
                            <ListItemAvatar>
                                <Edit className={classes.editIcon}/>
                            </ListItemAvatar>
                            <Link className={classes.link} to="/edit-profile">
                                <ListItemText primary="Edit Profile"/>
                            </Link>
                        </ListItem>

                        <ListItem
                            divider={true} button={true}
                            id="changepassword">
                            <ListItemAvatar>
                                <LockOpen className={classes.changePasswordIcon}/>
                            </ListItemAvatar>
                            <Link className={classes.link} to="/change-password">
                                <ListItemText primary="Change Password"/>
                            </Link>
                        </ListItem>

                        <ListItem onClick={handleDeleteAccountClicked}
                                  button={true} id="deleteaccount">
                            <ListItemAvatar>
                                <DeleteForever className={classes.deleteIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Delete Account"/>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DrawerContent;
