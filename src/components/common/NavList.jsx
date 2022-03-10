import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import { isSchemaType } from "sambal";

const NavElement = ({ url, nav }) => {
    return (
        <ListItem
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
    );
};

const NavList = ({ url, name, navList }) => {
    if (!Array.isArray(navList)) {
        return null;
    }
    const navElements = [];
    for (const nav of navList) {
        if (isSchemaType(nav, "sitenavigationelement", false)) {
            navElements.push(
                <NavElement
                    key={url}
                    nav={nav}
                    url={url}
                />
            );
        } else if (isSchemaType(nav, "itemlist", false)) {
            navElements.push(
                <NavList
                    key={nav.name}
                    name={nav.name}
                    navList={nav.itemListElement}
                    url={url}
                />
            );
        }
    }

    return (
        <List dense disablePadding>
            {name &&
             <ListItem>
                <ListItemText
                    primary={name}
                    primaryTypographyProps={{
                        variant: "h6"
                    }}
                />
            </ListItem>}
            {navElements}
        </List>
    );
};

export default NavList;