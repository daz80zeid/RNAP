import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@material-ui/core';
import { DownloadLinkVariables, FightersTableProps } from './@types';
import { makeStyles } from '@material-ui/core/styles';
import FightersTableRow from './components/FightersTableRow';
import styled from 'styled-components';
import { PrimaryColor, PrimaryDarkColor } from '../../../constants/Colors';
import { Pagination } from '../../elements';
import { DefaultAnimation } from '../../../styles/animation';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import { useMutationQL } from '../../../hooks';
import { Requests } from '../../../GraphQL';
import { getDataFromMutation } from '../../../utils';

const useStyles = makeStyles(() => ( {
    table: {
        background: 'transparent'
    },
    tableHeader: {
        background: PrimaryDarkColor
    },
    icon: {
        opacity: 0.6,
        cursor: 'pointer',
        color: '#fff',
        transition: '0.2s',
        '&:hover': {
            opacity: 1
        }
    }
} ));

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

const ToolWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 0 0 10px 0;
`;

const FightersTable: React.FC<FightersTableProps> = ( { data, refetchData } ) => {
    const classes = useStyles();
    const [ page, setPage ] = useState<number>(0);
    const [ rowPerPage, setRowPerPage ] = useState<number>(10);
    const [ getDownloadLink ] = useMutationQL<DownloadLinkVariables>(Requests.QL_GET_LINK_FOR_DOWNLOAD_FIGHTERS);

    const handleChangePage = ( event: any, newPage: number ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setRowPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleDownloadFighters = async() => {
        const link: string = getDataFromMutation(await getDownloadLink());
        window.open(link);
    };

    return (
        <Wrapper>
            <ToolWrapper>
                <Tooltip title="Скачать как excel файл" placement="top">
                    <SystemUpdateAltIcon fontSize="small" className={classes.icon} onClick={handleDownloadFighters}/>
                </Tooltip>
            </ToolWrapper>
            <TableContainer>
                <Table aria-label="customized table" className={classes.table}>
                    <TableHead className={classes.tableHeader}>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell>Имя</TableCell>
                            <TableCell>Возраст</TableCell>
                            <TableCell>Рост</TableCell>
                            <TableCell>Вес</TableCell>
                            <TableCell>Стиль</TableCell>
                            <TableCell>Готов биться</TableCell>
                            <TableCell>Любитель или профи</TableCell>
                            <TableCell>Спортивный разряд</TableCell>
                            <TableCell>Тренер</TableCell>
                            <TableCell>Клуб</TableCell>
                            <TableCell>Телефон</TableCell>
                            <TableCell>Действия</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowPerPage, page * rowPerPage + rowPerPage)
                             .map(( fighter, index ) => <FightersTableRow key={fighter.id} index={index}
                                                                          fighter={fighter}
                                                                          refetchData={refetchData}/>)}
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

export default FightersTable;
