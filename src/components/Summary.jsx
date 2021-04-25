import React from "react";
import BlogSummary from "./BlogSummary";
import { isSchemaType } from "sambal";

const Summary = ({ mainEntity }) => {
    if (isSchemaType(mainEntity, "article")) {
        return <BlogSummary mainEntity={mainEntity} />;
    }
    return null;
}

export default Summary;