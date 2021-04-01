import React, { Fragment } from "react";
import BlogPost from "./BlogPost";

const MainContent = ({ page }) => {
    const { mainEntity } = page;
    const pageType = page["@type"];
    const mainEntityType = mainEntity["@type"].toLowerCase();

    switch(mainEntityType) {
        case "blogposting":
            return <BlogPost mainEntity={mainEntity} />;
        default:
            return null;
    }
}

export default MainContent;