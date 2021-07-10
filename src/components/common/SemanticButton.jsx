import React from "react";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import HelpIcon from "@material-ui/icons/Help";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
// import { URL } from "url";

const UrlIcon = ({ href, fontSize }) => {
    if (!href) {
        return <HelpIcon fontSize={fontSize} />;
    }
    const myUrl = new URL(href);
    switch(myUrl.hostname) {
        case "linkedin.com":
        case "www.linkedin.com":
            return <LinkedInIcon fontSize={fontSize} />;
        case "github.com":
        case "www.github.com":
            return <GitHubIcon fontSize={fontSize} />;
        case "twitter.com":
        case "www.twitter.com":
            return <TwitterIcon fontSize={fontSize} />;
        case "facebook.com":
        case "www.facebook.com":
        case "fb.com":
            return <FacebookIcon fontSize={fontSize} />;
        default:
            return <HelpIcon fontSize={fontSize} />;
    }
}

const SemanticButton = ({ href, fontSize = "large", ...buttonProps }) => {
    return (
        <IconButton
            href={href}
            {...buttonProps}
        >
            <UrlIcon
                href={href}
                fontSize={fontSize}
            />
        </IconButton>
    );
};

export default SemanticButton;