import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
    main: {
      margin: 50
    }
}));

const Layout = ({ page, children }) => {
    const classes = useStyles();
    const header = page.hasPart ? page.hasPart.find(d => d["@type"].toLowerCase() === "wpheader") : null;
    
    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header header={header} />
                <main className={classes.main}>
                    {children}
                </main>
            </Container>
        </Fragment>
    );
}

export default Layout;