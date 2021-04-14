import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import NavList from "./NavList";

const sideBarWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
        // marginTop: 64
        // height: "calc(100vh - 64px)"
    },
    main: {
      margin: 50
    },
    sidebar: {
        width: sideBarWidth,
        flexShrink: 0,
        padding: theme.spacing(2)
    },
    content: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2)
    }
}));

const SideBarLayout = ({ url, sidebar, children }) => {
    const classes = useStyles();
    const sideBarElements = [];
    for (const part of sidebar.hasPart) {
        sideBarElements.push(
            <NavList mainEntity={part} url={url} />
        );
    }
    return (
        <Fragment>
            <div className={classes.root}>
                <div className={classes.sidebar}>
                    {sideBarElements}
                </div>
                <main className={classes.content}>
                    {children}
                </main>
            </div>
        </Fragment>
    );
};

const Layout = ({ page, children }) => {
    const classes = useStyles();
    const header = page.hasPart ? page.hasPart.find(d => d["@type"].toLowerCase() === "wpheader") : null;
    const sidebar = page.hasPart ? page.hasPart.find(d => d["@type"].toLowerCase() === "wpsidebar") : null;
    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                {header && 
                    <Header
                        url={page.url}
                        header={header}
                    />}
                {sidebar ? 
                    <SideBarLayout
                        url={page.url}
                        sidebar={sidebar}
                    >
                        {children}
                    </SideBarLayout> :
                    <main className={classes.main}>
                        {children}
                    </main>}
            </Container>
        </Fragment>
    );
}

export default Layout;