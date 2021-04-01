import React from "react";
import Typography from "@material-ui/core/Typography";

const BlogPost = ({ mainEntity }) => {
    return (
        <div>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {mainEntity.headline}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {mainEntity.alternativeHeadline}
            </Typography>
        </div>
    );
}

export default BlogPost;