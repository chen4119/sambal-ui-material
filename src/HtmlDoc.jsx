import React from "react";

const HtmlDoc = ({ children }) => {
    return (
        <html>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
                <meta http-equiv="Pragma" content="no-cache"/>
                <meta http-equiv="Expires" content="0"/>
                <base href="/" />
                <script src="client"></script>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}

export default HtmlDoc;