import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Summary from "./Summary";
import { isSchemaType } from "sambal";

const useStyles = makeStyles((theme) => ({
    list: {
      listStyleType: "none"
    },
    item: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    }
}));

function getEntities(mainEntity) {
    if (isSchemaType(mainEntity, "listitem")) {
        return getEntities(mainEntity.item);
    }
    if (isSchemaType(mainEntity, "itemlist")) {
        return Array.isArray(mainEntity.itemListElement) ?
            mainEntity.itemListElement :
            [mainEntity.itemListElement];
    }
    return [];
}

const EntityList = ({ mainEntity }) => {
    const classes = useStyles();
    const entities = getEntities(mainEntity);

    return (
        <ul className={classes.list}>
            {entities.map((item, index) => (
                <li key={index} className={classes.item}>
                    <Summary mainEntity={item} />
                </li>
            ))}
        </ul>
    );
}

export default EntityList;