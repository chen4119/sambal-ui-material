import React from "react";
const ReactDOMServer = require("react-dom/server");
import { ServerStyleSheets, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Layout from "./src/components/Layout";
import MainContent from "./src/components/MainContent";
import { template } from "sambal";
const theme = createMuiTheme();

export function renderPage({ page, options }) {
    const { mainEntity } = page;
    const sheets = new ServerStyleSheets();
    const bodyHtml = ReactDOMServer.renderToString(
        sheets.collect(
            <ThemeProvider theme={theme}>
                <Layout page={page}>
                    <MainContent
                        mainEntity={mainEntity}
                        isLanding={page.url === "/"}
                    />    
                </Layout>
            </ThemeProvider>,
        )
    );
    const css = sheets.toString();

    return template`
        <html>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                
                <base href="/">
                <script src="client"></script>
                <style>
                    ${css}
                </style>
                ${options.googleAnalyticsId && googleAnalytics(options.googleAnalyticsId)}
            </head>
            <body>
                ${bodyHtml}
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

/*
export async function init({site, routes}) {

}*/

export const defaultOptions = {
    landingPage: true,
    googleAnalyticsId: null
}

export const browserBundle = {
    entry: {
        client: "./src/client.js"
    }
};
