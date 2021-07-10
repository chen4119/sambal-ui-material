import React from "react";
import ArticleSummary from "./creativework/ArticleSummary";
import { isSchemaType } from "sambal";

const Summary = ({ mainEntity }) => {
    if (isSchemaType(mainEntity, "article")) {
        return <ArticleSummary mainEntity={mainEntity} />;
    }
    return null;
}

export default Summary;