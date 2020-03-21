import React, {useState} from "react";
import {
    Card,
    CardContent,
    Container,
    Select,
    MenuItem,
    TextField,
    Button,
    Typography,
    Grid,
    Avatar
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";

// import DateFnsUtils from "@date-io/date-fns";

function SignUpPage(props) {

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

    const classes = useStyles();

    const [user, setUser] = useState({});
    const [openRole, setOpenRole] = useState({});
    const [loading, setLoading] = useState(false);

    function handleUserChange(event) {

    }

    function handleRoleClose() {

    }

    function handleRoleOpen() {

    }

    function handleUserLogin(event) {
        event.preventDefault();
        setLoading(true);
    }

    return (
        <div className={classes.container}>
            <Container>
                <Grid container={true} justify="center">
                    <Grid item={true} lg={6}>
                        <Card raised={true} elevation={2}>
                            <div>
                                <div className={classes.logoContainer}>
                                    <Avatar
                                        className={classes.logo}
                                        src="/static/images/logo512.png"/>
                                </div>
                                <Typography align="center" variant="h2">CoVid-19</Typography>
                                <Typography align="center" variant="h5">Sign Up</Typography>
                            </div>
                            <CardContent>
                                <form>
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


                                    <Typography gutterBottom={true} variant="overline">Role</Typography>
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={openRole}
                                        onClose={handleRoleClose}
                                        onOpen={handleRoleOpen}
                                        name="role"
                                        value={user.role}
                                        onChange={handleUserChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>


                                    <Button
                                        variant="contained"
                                        size="medium"
                                        className={classes.signInButton}
                                        fullWidth={true}
                                        disabled={loading}
                                        onSubmit={handleUserLogin}
                                        onClick={handleUserLogin}>Sign Up</Button>

                                    <Button
                                        className={classes.button}
                                        variant="text"
                                        fullWidth={true}
                                        disabled={loading}
                                        onSubmit={handleUserLogin}
                                        onClick={handleUserLogin}>
                                        <Link to="/login">
                                            Already have an account? Login
                                        </Link>
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default SignUpPage;
