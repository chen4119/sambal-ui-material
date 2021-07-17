import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SemanticButton from "./common/SemanticButton";
import SchemaType from "./SchemaType";
import { getEntityByType } from "sambal";
import { toArrayOfUrls } from "../util";


const useStyles = makeStyles(() => ({
    links: {
      textAlign: "center"
    },
    noBullets: {
        listStyleType: "none",
        padding: 0,
        margin: 0
    }
}));

const OfferCatalog = ({ catalog }) => {
    const classes = useStyles();
    return (
        <Fragment>
            <Typography variant="h5" color="inherit" gutterBottom>
                {catalog.name}
            </Typography>
            <ul className={classes.noBullets}>
                {catalog.itemListElement.map(item => (
                    <SchemaType mainEntity={item} />
                ))}
            </ul>
        </Fragment>
    );
};

const Person = ({ mainEntity }) => {
    const classes = useStyles();
    const [ catalog ] = useState(getEntityByType(mainEntity.hasOfferCatalog, "OfferCatalog"));
    const [ sameAs ] = useState(toArrayOfUrls(mainEntity.sameAs));
    return (
        <Container maxWidth="md">
            <Typography align="center" component="h1" variant="h3" color="inherit" gutterBottom>
                {mainEntity.name}
            </Typography>
            {mainEntity.description &&
                <Typography align="center" variant="h5" color="inherit" paragraph>
                    {mainEntity.description}
                </Typography>}
            {sameAs.length > 0 &&
                <div className={classes.links}>
                    {sameAs.map(url => (
                        <SemanticButton
                            href={url}
                            color="inherit"
                        />
                    ))}
                </div>}
            {catalog && 
                <OfferCatalog catalog={catalog} />}
        </Container>
    );
}

export default Person;