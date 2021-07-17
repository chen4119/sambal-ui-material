import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Content from "../common/Content";
import Image from "../common/Image";
import { DateTime } from "luxon";
import { toArrayOfString } from "../../util";

const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: 20
    },
    chip: {
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5
    },
    img: {
        marginTop: 15,
        marginBottom: 15
    }
}));

const Article = ({ mainEntity }) => {
    const classes = useStyles();
    return (
        <div>
            <Typography component="h1" variant="h4" color="inherit">
                {mainEntity.headline}
            </Typography>
            {mainEntity.alternativeHeadline && 
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    {mainEntity.alternativeHeadline}
                </Typography>}
            {mainEntity.dateCreated && 
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    {DateTime.fromJSDate(mainEntity.dateCreated).toLocaleString(DateTime.DATE_MED)}
                </Typography>}
            {mainEntity.keywords &&
                <div>
                    {toArrayOfString(mainEntity.keywords).map(tag => (
                        <Chip className={classes.chip} label={tag} />
                    ))}
                </div>}
            {mainEntity.image &&
                <Image className={classes.img} imageObj={mainEntity.image} />}
            <div className={classes.content}>
                <Content
                    content={mainEntity.text}
                    encoding={mainEntity.encodingFormat}
                />
            </div>
        </div>
    );
}

export default Article;