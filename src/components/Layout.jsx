import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const Layout = ({ children }) => {
    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    {children}
                </main>
            </Container>
        </Fragment>
    );
}

export default Layout;