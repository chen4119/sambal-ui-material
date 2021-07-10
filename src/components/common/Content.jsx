import React from "react";
import Markdown from "./Markdown";

const Content = ({ content, encoding }) => {

    switch (encoding) {
        case "text/markdown":
            return (
                <Markdown>
                    {content}
                </Markdown>
            );
        case "text/html":
            return <div dangerouslySetInnerHTML={{__html: content}} />;
        case "text/plain":
            return (
                <div>
                    {content}
                </div>
            );
        default:
            return null;
    }
}

export default Content;