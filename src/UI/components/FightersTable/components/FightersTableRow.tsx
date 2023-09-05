import React, { useState } from 'react';
import { TableRow, Tooltip } from '@material-ui/core';
import { DeleteUserVariables, FightersTableRowProps } from '../@types';
import { getFightersAge, getFightStyle, getSportRange } from '../../../../utils';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import BlockIcon from '@material-ui/icons/Block';
import className from 'classnames';
import { TableCell } from '../../../elements';
import { GreenColor, RedColor } from '../../../../constants/Colors';
import BanModal from '../../BanModal';
import UnbanModal from '../../UnbanModal';
import DeleteModal from '../../DeleteModal';
import { useMutationQL } from '../../../../hooks';
import { Requests } from '../../../../GraphQL';

const useStyles = makeStyles(() => ( {
    row: {
        verticalAlign: 'text-top'
    },
    arrow: {
        position: 'absolute',
        right: '-22px',
        top: '-4px',
        cursor: 'pointer',
        transform: 'rotate(90deg)',
        transition: '0.3s'
    },
    expandedArrow: {
        transform: 'rotate(0deg)'
    },
    unbanIcon: {
        color: RedColor,
        cursor: 'pointer',
        '&:hover': {
            opacity: 1,
            color: GreenColor,
        }
    },
    actionIcon: {
        opacity: 0.6,
        cursor: 'pointer',
        '&:hover': {
            color: RedColor,
            opacity: 1
        }
    }
} ));

const ListWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
`;

const ListItem = styled.span`
`;

const IconContainer = styled.div`
	position: relative;
	top: 4px;
	display: flex;
	justify-content: space-between;
	margin-right: 20px;
`;

const FightersTableRow: React.FC<FightersTableRowProps> = ( { fighter, index, refetchData } ) => {
    const classes = useStyles();
    const [ basicStyleIsOpen, setBasicStyleIsOpen ] = useState<boolean>(false);
    const [ openBanModal, setOpenBanModal ] = useState<boolean>(false);
    const [ openUnbanModal, setOpenUnbanModal ] = useState<boolean>(false);
    const [ openDeleteModal, setOpenDeleteModal ] = useState<boolean>(false);

    const [deleteUser] = useMutationQL<DeleteUserVariables>(Requests.QL_DELETE_USER_BY_ADMIN)

    const handleDeleteUser = async () => {
        await deleteUser({id: fighter.id});
        setOpenDeleteModal(false)
        if (refetchData) {
            await refetchData();
        }
    }

    const {
        id,
        displayName,
        phoneNumber,
        banned,
        fighter: {
            dateOfBirth,
            weight,
            height,
            basicStyle,
            isReadyFighter,
            isProfessional,
            trainer,
            belongingClub,
            sportCategory
        }
    } = fighter;

    return (
        <TableRow className={classes.row}>
            <DeleteModal open={openDeleteModal}
                         onClose={() => setOpenDeleteModal(false)}
                         title={`Удалить пользлвателя ${displayName}?`}
                         // content="Удаление пользователя приведет к удалению его личных данных, всех его новостей, комментариев и другой пользовательской активности. /n Удаление может занять некоторое время"
                         content={
                             `Удаление пользователя приведет к удалению его личных данных, 
                              всех его новостей, комментариев и другой пользовательской активности. 
                              Удаление может занять некоторое время`}
                         onDelete={handleDeleteUser}

            />
            <BanModal open={openBanModal}
                      onClose={() => setOpenBanModal(false)}
                      userName={displayName}
                      userId={id}
                      refetchUsers={refetchData}
            />
            <UnbanModal
                userName={displayName}
                userId={id}
                refetchUsers={refetchData}
                open={openUnbanModal}
                onClose={() => setOpenUnbanModal(false)}
            />

            <TableCell>{index + 1}</TableCell>
            <TableCell>{displayName ? displayName : '-'}</TableCell>
            <TableCell>{getFightersAge(dateOfBirth)}</TableCell>
            <TableCell>{height ? height : 'Не указан'}</TableCell>
            <TableCell>{weight ? weight : 'Не указан'}</TableCell>
            <TableCell><ListWrapper>
                {basicStyle?.length > 3 && <ArrowDropDownIcon
										className={className({ [classes.arrow]: true }, { [classes.expandedArrow]: basicStyleIsOpen })}
										onClick={() => setBasicStyleIsOpen(prev => !prev)}/>}

                {!!basicStyle?.length ?
                    basicStyleIsOpen ?
                        basicStyle.map(i => <ListItem
                            key={i}>{getFightStyle(i)}</ListItem>)
                        : basicStyle.slice(0, 2).map(i => <ListItem
                            key={i}>{getFightStyle(i)}</ListItem>)
                    : 'Не указаны'}
            </ListWrapper></TableCell>
            <TableCell>{isReadyFighter ? 'Готов' : 'Не готов'}</TableCell>
            <TableCell>{isProfessional ? 'Профессионал' : 'Любитель'}</TableCell>
            <TableCell>{!!sportCategory?.length ? getSportRange(sportCategory[0]) : 'Не указан'}</TableCell>
            <TableCell>{trainer ? 'Есть' : 'Нет'}</TableCell>
            <TableCell>{belongingClub ? belongingClub : 'Нет'}</TableCell>
            <TableCell>{phoneNumber ? phoneNumber : 'Не указан'}</TableCell>
            <TableCell>
                <IconContainer>
                    {banned ? <Tooltip title="Разблокировать" placement="top">
                            <BlockIcon fontSize="small" className={classes.unbanIcon}
                                       onClick={() => setOpenUnbanModal(true)}
                            />
                        </Tooltip>
                        :
                        <Tooltip title="Заблокировать" placement="top">
                            <BlockIcon fontSize="small" className={classes.actionIcon}
                                       onClick={() => setOpenBanModal(true)}
                            />
                        </Tooltip>}
                    <Tooltip title="Удалить" placement="top">
                        <DeleteIcon fontSize="small" className={classes.actionIcon}
                                    onClick={() => setOpenDeleteModal(true)}
                        />
                    </Tooltip>
                </IconContainer>
            </TableCell>
        </TableRow>
    );
};

export default FightersTableRow;
