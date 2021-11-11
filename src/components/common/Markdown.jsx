import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ReactMarkdown from "markdown-to-jsx";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import { TableRow } from "@material-ui/core";

const styles = (theme) => ({
    listItem: {
        marginTop: theme.spacing(1),
    }
});

const options = {
    overrides: {
        h1: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'h5',
            },
        },
        h2: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'h6',
            },
        },
        h3: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'subtitle1',
            },
        },
        h4: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'caption',
                paragraph: true
            },
        },
        p: {
            component: Typography,
            props: {
                variant: "body1",
                paragraph: true
            },
        },
        a: { 
            component: Link
        },
        li: {
            component: withStyles(styles)(({ classes, ...props }) => (
                <li className={classes.listItem}>
                    <Typography component="span" {...props} />
                </li>
            ))
        },
        table: {
            component: Table
        },
        thead: {
            component: TableHead
        },
        tbody: {
            component: TableBody
        },
        tr: {
            component: TableRow
        },
        th: {
            component: TableCell,
            props: {
                align: "left"
            }
        },
        td: {
            component: TableCell,
            props: {
                align: "left"
            }
        }
    },
};

export default function Markdown(props) {
    return (
        <ReactMarkdown options={options} {...props} />
    );
}