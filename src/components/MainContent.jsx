import React from "react";
import BlogPost from "./BlogPost";
import Person from "./Person";
import Landing from "./Landing";
import EntityList from "./EntityList";
import Article from "./Article";
import { isSchemaType } from "sambal";

const MainContent = ({ mainEntity, isLanding = false }) => {
    if (isLanding) {
        return (
            <Landing mainEntity={mainEntity} />
        );
    }
    if (isSchemaType(mainEntity, "blogposting", false)) {
        return <BlogPost mainEntity={mainEntity} />;
    } else if (isSchemaType(mainEntity, "article")) {
        return <Article mainEntity={mainEntity} />;
    } else if (isSchemaType(mainEntity, "person")) {
        return <Person mainEntity={mainEntity} />;
    } else if (isSchemaType(mainEntity, "itemlist", false) || 
        isSchemaType(mainEntity, "listitem", false)) {
        return <EntityList mainEntity={mainEntity} />;
    }
    return null;
}

export default MainContent;