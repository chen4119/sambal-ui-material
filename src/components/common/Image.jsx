import React from "react";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import { toArrayOfObject } from "../../util";

const useStyles = makeStyles(() => ({
    root: {
        margin: "auto",
        display: "block",
        maxWidth: "100%"
    }
}));

function getImageAttribs(imageObj) {
    const srcset = [];
    srcset.push(`${imageObj.contentUrl} ${imageObj.width}w`);
    for (const thumbnail of toArrayOfObject(imageObj.thumbnail)) {
        srcset.push(`${thumbnail.contentUrl} ${thumbnail.width}w`);
    }
    return {
        srcSet: srcset.join(", "),
        alt: imageObj.name
    };
}
const Image = ({ className, imageObj, imgSizes = null }) => {
    const classes = useStyles();
    return (
        <img
            className={clsx(classes.root, className)}
            src={imageObj.contentUrl}
            {...getImageAttribs(imageObj)}
            sizes={imgSizes}
        />
    );
}

export default Image;