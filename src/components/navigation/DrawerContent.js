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
import {useHistory} from "react-router-dom";

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
    }

});


function DrawerContent() {

    const classes = useStyles();

    const history = useHistory();

    const [selectedIndex, setSelectedIndex] = useState(1);


    function handleListClick(event, key) {
        setSelectedIndex(key);

        switch (selectedIndex) {
            case 0:
                history.push("/profile");
                break;
            case 1:
                history.push("/");
                break;
            case 2:
                history.push("/list");
                break;
            case 3:
                history.push("/shops");
                break;
            case 4:
                history.push("/products");
                break;
            case 5:
                history.push("/orders");
                break;
            case 6:
                history.push("/cart");
                break;
            case 7:
                history.push("/account");
                break;
            case 8:
                history.push("/login");
                break;
            case 9:
                history.push("/edit-profile");
                break;
            case 10:
                history.push("/change-password");
                break;
            case 11:
                console.log("Delete Account Clicked");
                break;
            default:
                console.log("Nothing Selected")
        }

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
                        <ListItem selected={selectedIndex === 0} onClick={(event) => handleListClick(event, 0)}
                                  divider={true} button={true}
                                  id="profile">
                            <ListItemAvatar>
                                <Face className={classes.profileIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Stanley" secondary="Visit Profile"/>
                        </ListItem>

                        <ListItem selected={selectedIndex === 1} onClick={(event) => handleListClick(event, 1)}
                                  divider={true} button={true} id="home">
                            <ListItemAvatar>
                                <FormatListNumbered className={classes.agendaIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Home"/>
                        </ListItem>

                        <ListItem selected={selectedIndex === 2} onClick={(event) => handleListClick(event, 2)}
                                  divider={true} button={true} id="list">
                            <ListItemAvatar>
                                <CheckCircle className={classes.completedIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Shopping list"/>
                        </ListItem>

                        <ListItem selected={selectedIndex === 3} onClick={(event) => handleListClick(event, 3)}
                                  divider={true} button={true}
                                  id="shops">
                            <ListItemAvatar>
                                <CheckOutlined className={classes.uncompletedIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Shops"/>
                        </ListItem>

                        <ListItem selected={selectedIndex === 4} onClick={(event) => handleListClick(event, 4)}
                                  divider={true} button={true}
                                  id="products">
                            <ListItemAvatar>
                                <Timeline className={classes.timelineIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Products"/>
                        </ListItem>

                        <ListItem selected={selectedIndex === 5} onClick={(event) => handleListClick(event, 5)}
                                  divider={true} button={true}
                                  id="orders">
                            <ListItemAvatar>
                                <CheckOutlined className={classes.uncompletedIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Orders"/>
                        </ListItem>

                        <ListItem selected={selectedIndex === 6} onClick={(event) => handleListClick(event, 6)}
                                  divider={true} button={true} id="cart">
                            <ListItemAvatar>
                                <CheckCircle className={classes.completedIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Cart"/>
                        </ListItem>

                        <ListItem selected={selectedIndex === 7} onClick={(event) => handleListClick(event, 7)}
                                  divider={true} button={true}
                                  id="account">
                            <ListItemAvatar>
                                <CheckCircle className={classes.completedIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Account"/>
                        </ListItem>
                    </List>
                </Grid>

                <Grid>
                    <List dense={false} draggable={true}>
                        <ListItem selected={selectedIndex === 8} onClick={(event) => handleListClick(event, 8)}
                                  divider={true} button={true}
                                  id="logout">
                            <ListItemAvatar>
                                <ExitToApp className={classes.logoutIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Logout"/>
                        </ListItem>

                        <ListItem selected={selectedIndex === 9} onClick={(event) => handleListClick(event, 9)}
                                  divider={true} button={true}
                                  id="editprofile">
                            <ListItemAvatar>
                                <Edit className={classes.editIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Edit Profile"/>
                        </ListItem>

                        <ListItem selected={selectedIndex === 10} onClick={(event) => handleListClick(event, 10)}
                                  divider={true} button={true}
                                  id="changepassword">
                            <ListItemAvatar>
                                <LockOpen className={classes.changePasswordIcon}/>
                            </ListItemAvatar>
                            <ListItemText primary="Change Password"/>
                        </ListItem>

                        <ListItem selected={selectedIndex === 11} onClick={(event) => handleListClick(event, 11)}
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
