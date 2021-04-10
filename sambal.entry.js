import React from "react";
const ReactDOMServer = require("react-dom/server");
import { ServerStyleSheets, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Head from "./src/Head";
import Layout from "./src/components/Layout";
import MainContent from "./src/components/MainContent";

const theme = createMuiTheme();


export function renderPage({ page, siteGraph, options }) {
    const { mainEntity } = page;
    const sheets = new ServerStyleSheets();
    const bodyHtml = ReactDOMServer.renderToString(
        sheets.collect(
            <ThemeProvider theme={theme}>
                <Layout page={page}>
                    <MainContent mainEntity={mainEntity} />    
                </Layout>
            </ThemeProvider>,
        )
    );
    const css = sheets.toString();
    return (
        <html>
            <head>
                <Head css={css} />
            </head>
            <body>
                {bodyHtml}
            </body>
        </html>
    );
}

/*
export async function init({site, routes}) {

}*/

export const defaultOptions = {
    testing: true
}

export const browserBundle = {
    entry: {
        client: "./src/client.js"
    }
};
