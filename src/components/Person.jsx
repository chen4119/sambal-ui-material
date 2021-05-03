import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SemanticButton from "./common/SemanticButton";

const useStyles = makeStyles(() => ({
    container: {
      textAlign: "center"
    }
}));

const Person = ({ mainEntity }) => {
    const classes = useStyles();
    return (
        <Container maxWidth="sm" className={classes.container}>
            <Typography align="center" component="h1" variant="h3" color="inherit" gutterBottom>
                {mainEntity.name}
            </Typography>
            <Typography align="center" variant="h5" color="inherit" paragraph>
                {mainEntity.description}
            </Typography>
            {Array.isArray(mainEntity.sameAs) && mainEntity.sameAs.map(url => (
                <SemanticButton
                    url={url}
                    href={url}
                    color="inherit"
                />
            ))}
        </Container>
    );
}

export default Person;