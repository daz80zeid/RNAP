import React, { useState } from 'react';
import { BanModalProps, BanVariables } from './@types';
import { makeStyles } from '@material-ui/core/styles';
import { RedColor } from '../../../constants/Colors';
import { Modal, Selector, Title } from '../../elements';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useMutationQL } from '../../../hooks';
import { Requests } from '../../../GraphQL'

const useStyles = makeStyles(() => ( {
    banButton: {
        color: RedColor,
    },
} ));

const Content = styled.div`
	margin-bottom: 15px;
`;

const Row = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	font-size: 14px;
    margin-bottom: 10px;
`;

const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-direction: row;
	gap: 20px;
`;

const BanModal: React.FC<BanModalProps> = ( { open, onClose, userName, userId, refetchUsers } ) => {
    const classes = useStyles();
    const [ banDuration, setBanDuration] = useState<number | string>(1);
    const [ban] = useMutationQL<BanVariables>(Requests.QL_BAN_USER_BY_ADMIN)

    const handleBanUser = async () => {
        await ban({idUser: userId, bannedPeriod: banDuration})
        onClose();
        if (refetchUsers) {
            await refetchUsers();
        }
    }

    return (
        <Modal open={open} onClose={onClose}>
             <Title size={23} text={`Бан пользователя ${userName}`} margin="0 0 15px 0" display="block"/>
            <Content>
                <Row> Забаненный пользователь не сможет создавать новости <br/> и оставлять комментарии
                </Row>
                <Row>Количество дней блокировки:
                    <Selector values={[ 1, 3, 7, 30 ]} defaultValue={1} onSelect={value => setBanDuration(value)}/>
                </Row>
            </Content>
            <ButtonsWrapper>
                <Button className={classes.banButton} onClick={handleBanUser}>Заблокировать</Button>
                <Button onClick={() => onClose()}>Отмена</Button>
            </ButtonsWrapper>
        </Modal>
    );
};

export default BanModal;
