import React from 'react';
import {TableCell} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles =  makeStyles(() => ({
    cell: {
        paddingTop: 10,
        paddingBottom: 10
    }
}));


const DefaultTableCell: React.FC = ( {children}) => {
    const classes = useStyles();
    return (
        <TableCell className={classes.cell}>
            {children}
        </TableCell>
    );
};

export default DefaultTableCell;
