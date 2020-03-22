import React, {useState} from "react";
import {Avatar, Button, Card, CardContent, Container, Grid, TextField, Typography} from "@material-ui/core";

import {makeStyles} from "@material-ui/styles";

function ForgotPasswordPage(props) {

    const useStyles = makeStyles({
        container: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#eeeeee",
            justifyContent: "center",
            alignItems: "center"
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
            marginBottom: "4px",
            backgroundColor: "purple",
            color: "white"
        }
    });

    const classes = useStyles();

    const [user, setUser] = useState({email: "",});
    const [loading, setLoading] = useState(false);


    function handleUserChange(event) {
        setUser({...user, [event.target.name]: event.target.value})
    }

    function handleEmailSubmission(event) {
        event.preventDefault();
        setLoading(true);
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
                                    <Typography align="center" variant="h4">PickItApp</Typography>
                                    <Typography align="center" variant="h5">Forgot Password</Typography>
                                </div>
                                <Typography gutterBottom={true} variant="overline">Email</Typography>
                                <TextField
                                    className={classes.textField}
                                    label="Email"
                                    placeholder="Enter email"
                                    fullWidth={true}
                                    helperText="Reset link will be sent to the email provided"
                                    required={true}
                                    onChange={handleUserChange}
                                    margin="dense"
                                    type="email"
                                    value={user.email}
                                    name="email"
                                    id="email"
                                    variant="outlined"
                                />

                                <Button
                                    variant="contained"
                                    size="medium"
                                    className={classes.button}
                                    fullWidth={true}
                                    disabled={loading}
                                    onSubmit={handleEmailSubmission}
                                    onClick={handleEmailSubmission}>Recover Password</Button>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}

export default ForgotPasswordPage;
