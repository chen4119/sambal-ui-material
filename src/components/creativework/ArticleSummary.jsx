import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { DateTime } from "luxon";

const ArticleSummary = ({ mainEntity }) => {
    return (
        <Fragment>
            <Link href={mainEntity.url} variant="h4" color="primary">
                {mainEntity.headline}
            </Link>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                {DateTime.fromJSDate(mainEntity.dateCreated).toLocaleString(DateTime.DATE_MED)}
            </Typography>
        </Fragment>
    );
}

export default ArticleSummary;