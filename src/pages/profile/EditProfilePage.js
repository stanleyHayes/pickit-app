import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Avatar, Button, Card, CardContent, Container, Grid, IconButton, TextField, Typography} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

function EditProfilePage(props) {

    const useStyles = makeStyles({
        container: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#eeeeee",
            justifyContent: "center",
            alignItems: "center"
        },
        signInButton: {
            backgroundColor: "purple",
            color: "white"
        },
        logo: {
            width: 200,
            height: 200,
            textAlign: "center"
        },
        logoContainer: {
            display: "flex",
            justifyContent: "center"
        },
        textField: {
            marginTop: "4px",
            marginBottom: "4px"
        },
        button: {
            marginTop: "4px",
            marginBottom: "4px"
        }
    });


    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    const classes = useStyles();

    function handleProfileUpdateSubmit(event) {
        event.preventDefault();

        setLoading(true);
    }

    function handleUserChange(event) {
        setUser({...user, [event.target.name]: event.target.value})
    }

    return (
        <Layout>
            <div className={classes.container}>
                <Container>
                    <Grid container={true} justify="center">
                        <Grid item={true} lg={6}>
                            <Card raised={true} elevation={2}>
                                <CardContent>
                                    <div>
                                        <div className={classes.logoContainer}>
                                            <Avatar
                                                className={classes.logo}
                                                src="/static/images/logo512.png"/>
                                        </div>
                                        <Typography align="center" variant="h4">CoVid-19</Typography>
                                        <Typography align="center" variant="h5">Update Profile</Typography>
                                    </div>

                                    <Typography gutterBottom={true} variant="overline">Full Name</Typography>
                                    <TextField
                                        label="Name"
                                        placeholder="Enter full name"
                                        fullWidth={true}
                                        required={true}
                                        className={classes.textField}
                                        onChange={handleUserChange}
                                        margin="dense"
                                        type="text"
                                        value={user.name}
                                        name="name"
                                        id="name"
                                        variant="outlined"
                                    />

                                    <Typography gutterBottom={true} variant="overline">Email</Typography>
                                    <TextField
                                        className={classes.textField}
                                        label="Email"
                                        placeholder="Enter email"
                                        fullWidth={true}
                                        required={true}
                                        onChange={handleUserChange}
                                        margin="dense"
                                        type="email"
                                        value={user.email}
                                        name="email"
                                        id="email"
                                        variant="outlined"
                                    />

                                    <Typography gutterBottom={true} variant="overline">Phone</Typography>
                                    <TextField
                                        className={classes.textField}
                                        label="Username"
                                        placeholder="Enter username"
                                        fullWidth={true}
                                        required={true}
                                        onChange={handleUserChange}
                                        margin="dense"
                                        type="text"
                                        variant="outlined"
                                        value={user.username}
                                        name="username"
                                        id="username"
                                    />

                                    <Typography gutterBottom={true} variant="overline">Address</Typography>
                                    <TextField
                                        className={classes.textField}
                                        label="Address"
                                        placeholder="Enter address"
                                        fullWidth={true}
                                        required={true}
                                        onChange={handleUserChange}
                                        margin="dense"
                                        type="text"
                                        variant="outlined"
                                        value={user.address}
                                        name="address"
                                        id="address"
                                    />


                                    <Button
                                        variant="contained"
                                        size="medium"
                                        className={classes.signInButton}
                                        fullWidth={true}
                                        disabled={loading}
                                        onSubmit={handleProfileUpdateSubmit}
                                        onClick={handleProfileUpdateSubmit}>Update Profile</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Layout>
    )
}

export default EditProfilePage;
