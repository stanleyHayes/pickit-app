import React, {useState} from "react";
import {Card, CardContent, Container, Typography, TextField, Button, IconButton, Grid, Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";
import {Visibility, VisibilityOff} from "@material-ui/icons";

function SignInPage(props) {

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
        forgottenPasswordButton: {
            float: "right",
            marginTop: "4px",
            marginBottom: "4px"
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
        },
        inVisibleIcon: {
            color: "green"
        },
        visibleIcon:{
            color: "red"
        }
    });

    const classes = useStyles();

    const [user, setUser] = useState({name: "",});
    const [loading, setLoading] = useState(false);
    const [visible, setVisibility] = useState(false);

    function handleUserChange(event) {

    }

    function handleUserLogin(event) {

    }

    function handlePasswordVisibility() {
        setVisibility(!visible);
    }

    return (
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
                                    <Typography align="center" variant="h5">Sign In</Typography>
                                </div>
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

                                <Typography gutterBottom={true} variant="overline">Password</Typography>
                                <div className={classes.passwordVisibilityContainer}>
                                    <TextField
                                        label="Password"
                                        placeholder="Enter password"
                                        fullWidth={false}
                                        required={true}
                                        onChange={handleUserChange}
                                        margin="dense"
                                        className={classes.passwordTextField}
                                        type={(visible) ? "text" : "password"}
                                        value={user.email}
                                        name="email"
                                        id="email"
                                        variant="outlined"
                                    />

                                    <IconButton onClick={handlePasswordVisibility}>
                                        {(visible) ? (<VisibilityOff className={classes.inVisibleIcon}/>) : (<Visibility className={classes.visibleIcon}/>)}
                                    </IconButton>
                                </div>


                                <Button
                                    className={classes.forgottenPasswordButton}
                                    variant="text"
                                    fullWidth={false}
                                    disabled={loading}
                                    onSubmit={handleUserLogin}
                                    onClick={handleUserLogin}>
                                    <Link to="/recovery-password">
                                        Forgotten Password?
                                    </Link>
                                </Button>

                                <Button
                                    variant="contained"
                                    size="medium"
                                    className={classes.signInButton}
                                    fullWidth={true}
                                    disabled={loading}
                                    onSubmit={handleUserLogin}
                                    onClick={handleUserLogin}>Sign In</Button>

                                <Button
                                    className={classes.button}
                                    variant="text"
                                    fullWidth={true}
                                    disabled={loading}
                                    onSubmit={handleUserLogin}
                                    onClick={handleUserLogin}>
                                    <Link to="/register">
                                        Don't have an account? Register
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default SignInPage;
