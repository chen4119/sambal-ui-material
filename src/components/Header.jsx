import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import { getEntitiesByType } from "sambal";

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

const Action = ({ action }) => {
    if (!action.target) {
        return null;
    }
    if (action.name) {
        return (
            <Button href={action.target} color="inherit">
                {action.name}
            </Button>
        );
    } else {
        return (
            <IconButton href={action.target} color="inherit">
                <GitHubIcon />
            </IconButton>
        );
    }
};

const Header = ({ url, header }) => {
    const classes = useStyles();
    const nav = getEntitiesByType(header.hasPart, "sitenavigationelement");
    const actions = getEntitiesByType(header.potentialAction, "action");
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
                {actions.length > 0 && 
                    actions.map(action => (
                        <Action key={action.target} action={action} />
                    ))}
            </Toolbar>
        </Fragment>
    );
}

export default Header;