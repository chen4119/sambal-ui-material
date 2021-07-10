import React from "react";
import Person from "./Person";
import Landing from "./Landing";
import EntityList from "./EntityList";
import Article from "./creativework/Article";
import SoftwareSourceCode from "./creativework/SoftwareSourceCode";
import { isSchemaType } from "sambal";

const SchemaType = ({ mainEntity, isLanding = false }) => {
    if (isLanding) {
        return (
            <Landing mainEntity={mainEntity} />
        );
    }
    if (isSchemaType(mainEntity, "Article")) {
        return <Article mainEntity={mainEntity} />;
    } else if (isSchemaType(mainEntity, "SoftwareSourceCode")) {
        return <SoftwareSourceCode mainEntity={mainEntity} />;
    } else if (isSchemaType(mainEntity, "Person")) {
        return <Person mainEntity={mainEntity} />;
    } else if (isSchemaType(mainEntity, "itemlist", false) || 
        isSchemaType(mainEntity, "listitem", false)) {
        return <EntityList mainEntity={mainEntity} />;
    }
    return null;
}

export default SchemaType;