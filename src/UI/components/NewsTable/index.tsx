import React, { useState } from 'react';
import { NewsTableProps } from './@types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import styled from 'styled-components';
import { PrimaryColor, PrimaryDarkColor } from '../../../constants/Colors';
import { makeStyles } from '@material-ui/core/styles';
import NewsTableRow from './components/NewsTableRow';
import { Pagination } from '../../elements';
import { DefaultAnimation } from '../../../styles/animation';

const Wrapper = styled.div`
	background: ${PrimaryColor};
	width: 100%;
	overflow-x: auto;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);

	@media (prefers-reduced-motion: no-preference) {
		animation-name: ${DefaultAnimation};
		animation-fill-mode: backwards;
	}
`;

const useStyles = makeStyles(() => ( {
    table: {
        background: 'transparent'
    },
    tableHeader: {
        background: PrimaryDarkColor
    }
} ));

const NewsTable: React.FC<NewsTableProps> = ( { data } ) => {
    const classes = useStyles();
    const [ page, setPage ] = useState<number>(0);
    const [ rowPerPage, setRowPerPage ] = useState<number>(10);

    const handleChangePage = ( event: any, newPage: number ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setRowPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Wrapper>
            <TableContainer>
                <Table aria-label="customized table" className={classes.table}>
                    <TableHead className={classes.tableHeader}>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell>Название</TableCell>
                            <TableCell>Тип</TableCell>
                            <TableCell>Создано</TableCell>
                            <TableCell>Обновлено</TableCell>
                            <TableCell>Автор</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowPerPage, page * rowPerPage + rowPerPage)
                             .map(( news, index ) => <NewsTableRow key={news.id} index={index}
                                                                   news={news}/>)}
                    </TableBody>
                </Table>
            </TableContainer>
            {data.length > 10 && <Pagination
								count={data.length}
								onChangePage={handleChangePage}
								onChangeRowsPerPage={handleChangeRowsPerPage}
								page={page}
								rowsPerPage={rowPerPage}
								component="div"
								rowsPerPageOptions={[ 10, 20, 50 ]}
						/>}
        </Wrapper>
    );
};

export default NewsTable;
