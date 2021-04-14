import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        zIndex: theme.zIndex.drawer + 1,
        // backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    spacer: {
        flex: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    }
}));


const Header = ({ url, header }) => {
    const classes = useStyles();
    const nav = header.hasPart ? header.hasPart.filter(d => d["@type"].toLowerCase() === "sitenavigationelement") : [];
    return (
        <Fragment>
            <Toolbar className={classes.toolbar}>
                <Link
                    
                    variant="h5"
                    color="textPrimary" 
                    href="/"
                    underline="none"
                >
                    {header.headline}
                </Link>
                <div className={classes.spacer} />
                {nav.length > 0 &&
                    <nav>
                        {nav.map(n => (
                            <Fragment key={n.name}>
                                {n.url === url ?
                                    <Button
                                        className={classes.link}
                                        variant="contained"
                                    >
                                        {n.name}
                                    </Button> :
                                    <Link
                                        className={classes.link}
                                        variant="button"
                                        color="textPrimary" 
                                        href={n.url}
                                    >
                                        {n.name}
                                    </Link>}
                            </Fragment>    
                        ))}
                    </nav>}
            </Toolbar>
        </Fragment>
    );
}

export default Header;