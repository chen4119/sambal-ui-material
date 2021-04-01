import React from "react";
import HtmlDoc from "./src/HtmlDoc";
import Layout from "./src/components/Layout";
import MainContent from "./src/components/MainContent";

export async function renderPage({ page, siteGraph, options }) {
    const { mainEntity, url } = page;
    return (
        <HtmlDoc>
            <Layout>
                <MainContent mainEntity={mainEntity} />    
            </Layout>
        </HtmlDoc>
    );
}

export async function renderComponent({ mainEntity }) {
    return null;
}

/*
export async function init({site, routes}) {

}*/

export const defaultOptions = {

}

export const browserBundle = {
    entry: {
        client: "./src/client.js"
    }
};
