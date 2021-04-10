import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    }
}));


const Header = ({ header }) => {
    const classes = useStyles();
    const nav = header.hasPart ? header.hasPart.filter(d => d["@type"].toLowerCase() === "sitenavigationelement") : [];
    return (
        <Fragment>
            <Toolbar className={classes.toolbar}>
                <Typography
                    className={classes.toolbarTitle}
                    variant="h6"
                    color="inherit"
                    noWrap
                >
                    {header.headline}
                </Typography>
                {nav.length > 0 &&
                    <nav>
                        {nav.map(n => (
                            <Link
                                key={n.name}
                                className={classes.link}
                                variant="button"
                                color="textPrimary" 
                                href={n.url}>
                                {n.name}
                            </Link>
                        ))}
                    </nav>}
            </Toolbar>
        </Fragment>
    );
}

export default Header;