import React, { Fragment } from "react";

const Head = ({ css, mainEntity }) => {
    // const serialized = JSON.stringify(mainEntity, null, 4);
    return (
        <Fragment>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
            <meta httpEquiv="Pragma" content="no-cache"/>
            <meta httpEquiv="Expires" content="0"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            
            <base href="/" />
            <script src="client"></script>
            {css && 
                <style dangerouslySetInnerHTML={{__html: css}} />}
        </Fragment>
    );
}

export default Head;