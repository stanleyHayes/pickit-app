import React from "react";
import Layout from "../../components/layout/Layout";
import {Avatar, Container, Grid, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {
    AccountCircle,
    Apps,
    CheckOutlined, DeleteForever, Edit, ExitToApp,
    Face,
    FormatListBulleted, LockOpen,
    MonetizationOn,
    Shop,
    ShoppingCart
} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

function AccountPage() {


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


    const classes = useStyles();

    function handleDeleteAccountClicked(event) {

    }


    function handleLogoutClicked(event) {

    }

    return (
        <Layout>
            <Container>
                <Grid
                    container={true}
                    direction="row"
                    alignItems="center"
                    justify="center"
                    spacing={4}
                    className={classes.container}>

                    <Grid item={true} xs={12} md={8} lg={8} >
                        <List>
                            <ListItem divider={true} button={true} id="profile">
                                <ListItemAvatar>
                                    <Face className={classes.profileIcon}/>
                                </ListItemAvatar>
                                <Link className={classes.link} to="/profile">
                                    <ListItemText primary="Stanley Hayford" secondary="Profile"/>
                                </Link>
                            </ListItem>

                        </List>
                    </Grid>

                    <Grid item={true} xs={12} md={8} lg={8}>
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
        </Layout>
    )
}

export default AccountPage;
