import React from "react";
import Typography from "@material-ui/core/Typography";
import Markdown from "./Markdown";
import { DateTime } from "luxon";

const BlogPost = ({ mainEntity }) => {
    return (
        <div>
            <Typography component="h1" variant="h4" color="inherit">
                {mainEntity.headline}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                {DateTime.fromJSDate(mainEntity.dateCreated).toLocaleString(DateTime.DATE_MED)}
            </Typography>
            <Markdown>
                {mainEntity.text}
            </Markdown>
        </div>
    );
}

export default BlogPost;