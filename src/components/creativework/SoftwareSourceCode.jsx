import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SemanticButton from "../common/SemanticButton";
import { isAbsUrl } from "../../util";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";


const useStyles = makeStyles(() => ({
    listItem: {
        padding: 0
    }
}));

const SoftwareSourceCode = ({ mainEntity }) => {
    const classes = useStyles();
    return (
        <ListItem className={classes.listItem}>
            {isAbsUrl(mainEntity.codeRepository) &&
                <ListItemAvatar>
                    <SemanticButton
                        href={mainEntity.codeRepository}
                        color="inherit"
                    />
                </ListItemAvatar>}
            <ListItemText
                primary={mainEntity.headline}
                secondary={mainEntity.alternativeHeadline}
            />
        </ListItem>
    );
}

export default SoftwareSourceCode;