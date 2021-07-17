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

/*  // max width
const BREAKPOINTS = [
    768,  // med devices
    992,  // large devices
    1200  // x-large devices
];*/

function getImageAttribs(imageObj) {
    const srcset = [];
    srcset.push(`${imageObj.contentUrl} ${imageObj.width}w`);
    for (const thumbnail of toArrayOfObject(imageObj.thumbnail)) {
        srcset.push(`${thumbnail.contentUrl} ${thumbnail.width}w`);
    }
    return {
        srcset: srcset.join(", ")
    };
}
const Image = ({ className, imageObj }) => {
    const classes = useStyles();
    return (
        <img
            className={clsx(classes.root, className)}
            src={imageObj.contentUrl} 
            {...getImageAttribs(imageObj)}
        />
    );
}

export default Image;