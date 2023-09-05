import React from 'react';
import { TablePagination } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PaginationProps } from './@types';

const useStyles = makeStyles(() => ( {
    paginationSelector: {
        margin: '0 20px 0 10px',
        fontSize: 14,
        '& svg': {
            color: '#fff'
        }
    },
    paginationMenu: {
        '& li': {
            color: '#000 !important',
            fontSize: 15
        },
    }
} ));

const Pagination: React.FC<PaginationProps> = ( { count, page, onChangePage, onChangeRowsPerPage, rowsPerPageOptions,  rowsPerPage } ) => {
    const classes = useStyles();
    return (
        <TablePagination
            count={count}
            onChangePage={onChangePage}
            onChangeRowsPerPage={onChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            component="div"
            rowsPerPageOptions={rowsPerPageOptions}
            // className={classes.paginationDropdown}
            SelectProps={{
                className: classes.paginationSelector,
                MenuProps: {
                    className: classes.paginationMenu
                }
            }}
        />
    );
};

export default Pagination;
