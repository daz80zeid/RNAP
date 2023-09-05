import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import { FullUserData, UserInfoPopoverProps } from './@types';
import { makeStyles } from '@material-ui/core/styles';
import { ComponentContainer } from '../../containers';
import { useQueryQL } from '../../../hooks';
import { Requests } from '../../../GraphQL';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import { BlueColor, PrimaryDarkColor } from '../../../constants/Colors';
import { getUserType } from '../../../utils';

const useStyles = makeStyles(() => ( {
    popover: {
        backgroundColor: 'transparent'
    },
} ));

const UserNamePreview = styled.span`
	cursor: pointer;
	color: ${BlueColor};
	text-decoration: underline;
`;

const CardWrapper = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 14px;
`;

const UserImage = styled.div<{ url?: string }>`
	background-image: url(${( { url } ) => url});
	background-color: ${PrimaryDarkColor};
	width: 100px;
	height: 100px;
	background-position: center;
	background-size: cover;
	border-radius: 50%;
	margin-right: 20px;
`;

const Row = styled.div<{ marginBottom?: number }>`
	display: flex;
	font-size: 12px;
	margin-bottom: ${( { marginBottom } ) => marginBottom ? marginBottom : 0}px;
`;

const RowTitle = styled.span`
	font-size: 12px;
	margin-right: 5px;
	opacity: 0.7;
`;

const UserInfoPopover: React.FC<UserInfoPopoverProps> = ( { userId } ) => {
    const { data, isReady } = useQueryQL<FullUserData>(Requests.QL_GET_FULL_USER_BY_ID, { id: userId });
    const classes = useStyles();
    const [ anchorEl, setAnchorEl ] = useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = ( event: React.MouseEvent<HTMLButtonElement> ) => {
        isReady && setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <UserNamePreview aria-describedby={id} onClick={handleClick}>
                {isReady ? data.displayName : <CircularProgress color="secondary" size={15}/>}
            </UserNamePreview>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                PaperProps={{
                    className: classes.popover
                }
                }
            >
                {isReady && <ComponentContainer>
									<CardWrapper>
										<UserImage url={data.photoURL}/>
										<div>
                        {data.displayName}
											<Row marginBottom={10}>
												<RowTitle>{getUserType(data)[1]}</RowTitle>
											</Row>
											<Row>
												<RowTitle>Дата рождения:</RowTitle> {data?.dateOfBirth ? data.dateOfBirth : 'Не указана'}
											</Row>
											<Row>
												<RowTitle>Телефон:</RowTitle> {data?.phoneNumber ? data.phoneNumber : 'Не указан'}
											</Row>
										</div>
									</CardWrapper>
								</ComponentContainer>}
            </Popover>
        </>
    );
};

export default UserInfoPopover;
