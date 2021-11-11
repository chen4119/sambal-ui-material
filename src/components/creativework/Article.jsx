import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Content from "../common/Content";
import Image from "../common/Image";
import { DateTime } from "luxon";
import { toArrayOfString, toArrayOfObject } from "../../util";
import { getEntitiesByType } from "sambal";

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
        marginBottom: 15,
        maxHeight: 600
    },
    '@media (max-width: 768px)': {
        img: {
            maxHeight: 150
        }
    },
    '@media (max-width: 992px)': {
        img: {
            maxHeight: 300
        }
    }
}));

const BREAKPOINTS = [
    {screen: 768, image: 150},
    {screen: 992, image: 300}
    // {screen: 1200, image: 600}
];

function getImageSizes(imageObj) {
    const imageWidths = [+imageObj.width];
    for (const thumbnail of toArrayOfObject(imageObj.thumbnail)) {
        imageWidths.push(+thumbnail.width);
    }
    imageWidths.sort((a,b) => a - b);
    const sizes = [];
    for (const breakPoint of BREAKPOINTS) {
        for (const width of imageWidths) {
            if (width >= breakPoint.image) {
                sizes.push(`(max-width: ${breakPoint.screen}px) ${width}px`);
                break;
            }
        }
    }

    sizes.push("600px");
    return sizes.join(", ");
}

const Article = ({ mainEntity }) => {
    const classes = useStyles();
    const pageImages = useState(getEntitiesByType(mainEntity.image, "ImageObject", false)
        .filter(img => img.representativeOfPage));
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
                        <Chip key={tag} className={classes.chip} label={tag} />
                    ))}
                </div>}
            {pageImages.length > 0 && 
                <Image
                    className={classes.img}
                    imageObj={pageImages[0]}
                    imgSizes={getImageSizes(pageImages[0])}
                />}
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