import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Markdown from "./Markdown";
import Chip from "@material-ui/core/Chip";
import { DateTime } from "luxon";

const useStyles = makeStyles((theme) => ({
    chip: {
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5
    },
    content: {
        marginTop: 20
    }
}));

const BlogPost = ({ mainEntity }) => {
    const classes = useStyles();
    return (
        <div>
            <Typography component="h1" variant="h4" color="inherit">
                {mainEntity.headline}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                {DateTime.fromJSDate(mainEntity.dateCreated).toLocaleString(DateTime.DATE_MED)}
            </Typography>
            {mainEntity.keywords &&
                <div>
                    {mainEntity.keywords.map(tag => (
                        <Chip className={classes.chip} label={tag} />
                    ))}
                </div>}
            <Markdown className={classes.content}>
                {mainEntity.text}
            </Markdown>
        </div>
    );
}

export default BlogPost;