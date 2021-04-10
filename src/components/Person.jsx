import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
    container: {
      textAlign: "center"
    }
}));

const Person = ({ mainEntity }) => {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="sm" className={classes.container}>
                <Typography align="center" component="h1" variant="h3" color="inherit" gutterBottom>
                    {mainEntity.name}
                </Typography>
                <Typography align="center" variant="h5" color="inherit" paragraph>
                    {mainEntity.description}
                </Typography>
                <IconButton>
                    <LinkedInIcon fontSize="large"/>
                </IconButton>
            </Container>
        </div>
    );
}

export default Person;