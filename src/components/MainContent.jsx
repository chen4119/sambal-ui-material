import React, { Fragment } from "react";
import BlogPost from "./BlogPost";
import Person from "./Person";
import Landing from "./Landing";
import EntityList from "./EntityList";
import Article from "./Article";

const MainContent = ({ mainEntity, isLanding = false }) => {
    if (isLanding) {
        return (
            <Landing mainEntity={mainEntity} />
        );
    }
    const mainEntityType = mainEntity["@type"].toLowerCase();
    switch(mainEntityType) {
        case "itemlist":
        case "listitem":
            return <EntityList mainEntity={mainEntity} />;
        case "techarticle":
        case "apireference":
            return <Article mainEntity={mainEntity} />;
        case "blogposting":
            return <BlogPost mainEntity={mainEntity} />;
        case "person":
            return <Person mainEntity={mainEntity} />;
        default:
            return null;
    }
}

export default MainContent;