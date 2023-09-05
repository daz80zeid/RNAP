import React from 'react';
import { NewsTableRowProps } from '../@types';
import {TableCell } from '../../../elements';
import { makeStyles } from '@material-ui/core/styles';
import { TableRow } from '@material-ui/core';
import moment from 'moment';
import { getNewsType } from '../../../../utils';
import UserInfoPopover from '../../UserInfoPopover';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ( {
    row: {
        verticalAlign: 'text-top'
    },
} ));

const NewsLink = styled.span`
    text-decoration: underline;
    cursor: pointer;
`

const NewsTableRow: React.FC<NewsTableRowProps> = ( { news, index } ) => {
    const classes = useStyles();
    const history = useHistory();
    const {
        createdAt,
        event,
        id,
        title,
        updatedAt,
        userId
    } = news;

    return (
        <TableRow className={classes.row}>
            <TableCell>{index + 1}</TableCell>
            <TableCell><NewsLink onClick={() => history.push(`/news/${id}`)}>{title ? title : 'Без названия'}</NewsLink></TableCell>
            <TableCell>{getNewsType(event)}</TableCell>
            <TableCell>{moment(createdAt).format("D MMMM YYYY HH:mm")}</TableCell>
            <TableCell>{moment(updatedAt).format("D MMMM YYYY HH:mm")}</TableCell>
            <TableCell>{userId ? <UserInfoPopover userId={userId}/> : "Система"}</TableCell>
        </TableRow>
    );
};

export default NewsTableRow;
