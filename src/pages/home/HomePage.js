import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid, Typography, List} from "@material-ui/core";
import InstructionItem from "../../components/shared/InstructionItem";
import {makeStyles} from "@material-ui/styles";

function HomePage(props) {

    const instruction1 = {
        title: "Hand Washing",
        description: "Wash your hands every 20 minutes with soap and running water."
    };

    const instruction2 = {
        title: "Cough",
        description: "When coughing, cough into your elbow."
    };

    const instruction3 = {
        title: "Handshake",
        description: "Avoid handshakes as much as you can."
    };

    const instruction4 = {
        title: "Sickness",
        description: "If you feel sick, stay at home and call the emergency lines in your country."
    };

    const instruction5 = {
        title: "Water",
        description: "Drink a lot of water to hydrate your mouth."
    };
    const [instructions, setInstructions] = useState([instruction1, instruction2, instruction3, instruction4, instruction5]);

    const useStyles = makeStyles({
        root: {
            marginTop: 30
        },
        button: {
            textAlign: "left"
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <div className={classes.root}>
                <Container>
                    <Grid container={true} spacing={3} justify="center" alignItems="flex-start">
                        <Grid item={true}>
                            <List title="Things to do">
                                {instructions.map(function (instruction, index) {
                                    return (
                                        <InstructionItem key={index} instruction={instruction}/>
                                    )
                                })}
                            </List>
                        </Grid>
                        <Grid item={true}>
                            <Typography variant="h2">Orders with status on route</Typography>
                        </Grid>
                        <Grid item={true}>
                            <Typography variant="h2">Orders with status delivered</Typography>
                        </Grid>

                        <Grid item={true}>
                            <Typography variant="h2">Latest list. if not make list button</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Layout>
    )
}

export default HomePage;
