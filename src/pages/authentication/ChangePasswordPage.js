import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Avatar, Button, Card, CardContent, Container, Grid, IconButton, TextField, Typography} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

function ChangePassword(props) {

    const useStyles = makeStyles({
        container: {
            display: "flex",
            flexDirection: "column",
            minHeight: "80vh",
            paddingTop: 30,
            backgroundColor: "#eeeeee",
            justifyContent: "center",
            alignItems: "center"
        },
        signInButton: {
            backgroundColor: "purple",
            color: "white"
        },
        forgottenPasswordButton: {
            float: "right"
        },
        passwordVisibilityContainer: {
            display: "flex",
            flexDirection: "row",
            flex: 1
        },
        passwordTextField: {
            flexGrow: 1,
            marginTop: "4px",
            marginBottom: "4px"
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

    const classes = useStyles();

    const [passwords, setPasswords] = useState({oldPassword: "", newPassword: "", confirmNewPassword: ""});
    const [loading, setLoading] = useState(false);
    const [visible, setVisibility] = useState(false);

    function handlePasswordsChange(event) {
        setPasswords({...passwords, [event.target.name]: event.target.value})
    }

    function handlePasswordChangeSubmit(event) {
        event.preventDefault();
        setLoading(true);
    }

    function handlePasswordVisibility() {
        setVisibility(!visible);
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
                                        <Typography align="center" variant="h4">PickItApp</Typography>
                                        <Typography align="center" variant="h5">Change Password</Typography>
                                    </div>

                                    <Typography gutterBottom={true} variant="overline">Old Password</Typography>
                                    <TextField
                                        label="Password"
                                        placeholder="Enter password"
                                        fullWidth={true}
                                        required={true}
                                        onChange={handlePasswordsChange}
                                        margin="dense"
                                        className={classes.passwordTextField}
                                        type={(visible) ? "text" : "password"}
                                        value={passwords.oldPassword}
                                        name="oldPassword"
                                        id="oldPassword"
                                        variant="outlined"
                                    />

                                    <Typography gutterBottom={true} variant="overline">New Password</Typography>
                                    <TextField
                                        label="New Password"
                                        placeholder="Enter password"
                                        fullWidth={true}
                                        required={true}
                                        onChange={handlePasswordsChange}
                                        margin="dense"
                                        className={classes.passwordTextField}
                                        type={(visible) ? "text" : "password"}
                                        value={passwords.newPassword}
                                        name="newPassword"
                                        id="newPassword"
                                        variant="outlined"
                                    />

                                    <Typography gutterBottom={true} variant="overline">Password</Typography>
                                    <div className={classes.passwordVisibilityContainer}>
                                        <TextField
                                            label="Confirm New Password"
                                            placeholder="Enter password confirmation"
                                            fullWidth={true}
                                            required={true}
                                            onChange={handlePasswordsChange}
                                            margin="dense"
                                            className={classes.passwordTextField}
                                            type={(visible) ? "text" : "password"}
                                            value={passwords.confirmNewPassword}
                                            name="confirmNewPassword"
                                            id="confirmNewPassword"
                                            variant="outlined"
                                        />

                                        <IconButton onClick={handlePasswordVisibility}>
                                            {(visible) ? (<VisibilityOff/>) : (<Visibility/>)}
                                        </IconButton>
                                    </div>


                                    <Button
                                        variant="contained"
                                        size="medium"
                                        className={classes.signInButton}
                                        fullWidth={true}
                                        disabled={loading}
                                        onSubmit={handlePasswordChangeSubmit}
                                        onClick={handlePasswordChangeSubmit}>Change Password</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>

        </Layout>
    )
}

export default ChangePassword;
