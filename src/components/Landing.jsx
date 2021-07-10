import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { getEntityByType } from "sambal";

const useStyles = makeStyles((theme) => ({
    container: {
      textAlign: "center"
    },
    header: {
        height: 400,
        paddingTop: "10%"
    },
    feature: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(2),
        "&:not(:last-child)": {
            borderBottom: `1px solid ${theme.palette.divider}`
        }
    }
}));

function mapEntityToLandingSchema(mainEntity) {
    return {
        headline: mainEntity.headline,
        description: mainEntity.alternativeHeadline,
        features: mainEntity.usageInfo ? mainEntity.usageInfo.map(d => ({
            headline: d.headline,
            description: d.alternativeHeadline
        })) : []
    }
}
const Landing = ({ mainEntity }) => {
    const classes = useStyles();
    const [ landingSchema ] = useState(mapEntityToLandingSchema(mainEntity))
    const [ callToAction ] = useState(getEntityByType(mainEntity.potentialAction, "Action"));
    return (
        <Container maxWidth="md" className={classes.container}>
            <div className={classes.header}>
                <Typography align="center" component="h1" variant="h2" color="inherit" gutterBottom>
                    {landingSchema.headline}
                </Typography>
                <Typography align="center" variant="h5" color="inherit" paragraph>
                    {landingSchema.description}
                </Typography>
                {callToAction &&
                    <Button
                        variant="contained"
                        color="primary"
                        href={callToAction.target}
                    >
                        {callToAction.name}
                    </Button>}
            </div>
            {landingSchema.features.map(feature => (
                <div className={classes.feature} key={feature.headline}>
                    <Typography align="center" variant="h5" color="inherit" gutterBottom>
                        {feature.headline}
                    </Typography>
                    <Typography align="center" variant="body1" color="inherit" paragraph>
                        {feature.description}
                    </Typography>
                </div>
            ))}
        </Container>
    );
}

export default Landing;