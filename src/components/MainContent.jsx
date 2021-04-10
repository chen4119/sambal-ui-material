import React, { Fragment } from "react";
import BlogPost from "./BlogPost";
import Person from "./Person";

const MainContent = ({ mainEntity }) => {
    const mainEntityType = mainEntity["@type"].toLowerCase();
    switch(mainEntityType) {
        case "blogposting":
            return <BlogPost mainEntity={mainEntity} />;
        case "person":
            return <Person mainEntity={mainEntity} />;
        default:
            return null;
    }
}

export default MainContent;