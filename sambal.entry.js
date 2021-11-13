import React from "react";
const ReactDOMServer = require("react-dom/server");
import { ServerStyleSheets, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Layout from "./src/components/common/Layout";
import SchemaType from "./src/components/SchemaType";
import { template } from "sambal";
const theme = createMuiTheme();

export function renderPage({ page, options }) {
    const { mainEntity } = page;
    const sheets = new ServerStyleSheets();
    const bodyHtml = ReactDOMServer.renderToString(
        sheets.collect(
            <ThemeProvider theme={theme}>
                <Layout page={page}>
                    <SchemaType
                        mainEntity={mainEntity}
                        isLanding={options.landingPage && page.url === "/"}
                    />    
                </Layout>
            </ThemeProvider>
        )
    );
    const css = sheets.toString();
    return template`
        <!DOCTYPE html>
        <html lang="en-US">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                
                <base href="/">
                <script src="immediate"></script>
                <style>
                    pre[class*="language-"] {
                        margin-top: 24px;
                        margin-bottom: 24px;
                    }
                </style>
                <style>
                    ${css}
                </style>
                ${options.googleAnalyticsId && googleAnalytics(options.googleAnalyticsId)}
            </head>
            <body>
                ${bodyHtml}
                <script defer src="defer"></script>
            </body>
        </html>
    `;
}

function googleAnalytics(gid) {
    return template`
        <script async src="https://www.googletagmanager.com/gtag/js?id=${gid}"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${gid}');
        </script>
    `;
}

export const defaultOptions = {
    landingPage: false,
    googleAnalyticsId: null
}

export const browserBundle = {
    entry: {
        immediate: "./src/immediate.js",
        defer: "./src/defer.js"
    }
};
