import React from "react";
import BlogSummary from "./BlogSummary";

const Summary = ({ mainEntity }) => {
    const mainEntityType = mainEntity["@type"].toLowerCase();
    switch(mainEntityType) {
        case "blogposting":
            return <BlogSummary mainEntity={mainEntity} />;
        default:
            return null;
    }
}

export default Summary;