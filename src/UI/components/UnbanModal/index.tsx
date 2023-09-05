import React from 'react';
import { UnbanModalProps, UnbanVariables } from './@types';
import { makeStyles } from '@material-ui/core/styles';
import { GreenColor } from '../../../constants/Colors';
import { Modal, Title } from '../../elements';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useMutationQL } from '../../../hooks';
import { Requests } from '../../../GraphQL'

const useStyles = makeStyles(() => ( {
    unbanButton: {
        color: GreenColor,
    },
} ));

const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-direction: row;
	gap: 20px;
`;

const UnbanModal: React.FC<UnbanModalProps> = ( { open, onClose, userName, userId, refetchUsers } ) => {
    const classes = useStyles();
    const [unban] = useMutationQL<UnbanVariables>(Requests.QL_UNBAN_USER_BY_ADMIN)

    const handleUnbanUser = async () => {
        await unban({id: userId})
        onClose();
        if (refetchUsers) {
            await refetchUsers();
        }
    }

    return (
        <Modal open={open} onClose={onClose}>
            <Title size={23} text={`Разблокировать пользователя ${userName}`} margin="0 0 15px 0" display="block"/>
            <ButtonsWrapper>
                <Button className={classes.unbanButton} onClick={handleUnbanUser}>Разблокировать</Button>
                <Button onClick={() => onClose()}>Отмена</Button>
            </ButtonsWrapper>
        </Modal>
    );
};

export default UnbanModal;
