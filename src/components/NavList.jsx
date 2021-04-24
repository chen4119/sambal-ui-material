import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import { isSchemaType } from "sambal";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    }
}));

const NavList = ({ url, mainEntity }) => {
    const classes = useStyles();
    let name;
    let navList = [];
    if (Array.isArray(mainEntity)) {
        navList = mainEntity;
    } else if (isSchemaType(mainEntity, "itemlist", false)) {
        name = mainEntity.name;
        navList = mainEntity.itemListElement;
    }
    return (
        <List dense>
            {name &&
             <ListItem>
                <ListItemText
                    primary={name}
                    primaryTypographyProps={{
                        variant: "h6"
                    }}
                />
            </ListItem>}
            {navList.map(nav => (
                <ListItem
                    key={nav.name}
                    button={nav.url !== url}
                    selected={nav.url === url}
                >
                    <ListItemText
                        disableTypography
                        primary={
                            <Link
                                variant="button"
                                color="textPrimary" 
                                href={nav.url}>
                                {nav.name}
                            </Link>
                        }
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default NavList;