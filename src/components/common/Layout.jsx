import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import NavList from "./NavList";
import { getEntityByType, isSchemaType } from "sambal";

const useStyles = makeStyles((theme) => ({
    main: {
      marginLeft: 25,
      marginRight: 25,
      marginBottom: 50,
      marginTop: 25
    },
    sidebar: {
        position: "fixed",
        left: 10,
        display: "none",
        [theme.breakpoints.up("lg")]: {
            display: "block",
            width: 220
        }
    },
    topMenu: {
        display: "none",
        [theme.breakpoints.down("md")]: {
            display: "block"
        }
    }
}));

const SideBarLayout = ({ url, sidebar, children }) => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.sidebar}>
                <NavList
                    url={url}
                    navList={sidebar.hasPart}
                />
            </div>
            <main className={classes.main}>
                <div className={classes.topMenu}>
                    <NavList
                        url={url}
                        navList={sidebar.hasPart}
                    />
                </div>
                {children}
            </main>
        </Fragment>
    );
};

const Layout = ({ page, children }) => {
    const classes = useStyles();
    const header = getEntityByType(page.hasPart, "wpheader");
    const sidebar = getEntityByType(page.hasPart, "wpsidebar");
    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth={sidebar ? "md" : "lg"}>
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