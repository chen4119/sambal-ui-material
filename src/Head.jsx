import React, { Fragment } from "react";

const Head = ({ css }) => {
    return (
        <Fragment>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
            <meta httpEquiv="Pragma" content="no-cache"/>
            <meta httpEquiv="Expires" content="0"/>
            <base href="/" />
            <script src="client"></script>
            {css && 
                <style>{css}</style>}
        </Fragment>
    );
}

export default Head;