import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Markdown from "./Markdown";
import Chip from "@material-ui/core/Chip";
import { DateTime } from "luxon";

const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: 20
    }
}));

const Article = ({ mainEntity }) => {
    const classes = useStyles();
    return (
        <div>
            <Typography component="h1" variant="h4" color="inherit">
                {mainEntity.headline}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                {mainEntity.alternativeHeadline}
            </Typography>
            <Markdown className={classes.content}>
                {mainEntity.text}
            </Markdown>
        </div>
    );
}

export default Article;