import React from 'react';
import { DeleteModalProps } from './@types';
import { Modal, Title } from '../../elements';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { RedColor } from '../../../constants/Colors';

const useStyles = makeStyles(() => ( {
    deleteButton: {
        color: RedColor,
    },
} ));

const Content = styled.div`
	margin-bottom: 15px;
	white-space: pre-line;
`;

const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-direction: row;
	gap: 20px;
`;

const DeleteModal: React.FC<DeleteModalProps> = ( { open, onClose, title, content, onDelete } ) => {
    const classes = useStyles();
    return (
        <Modal open={open} onClose={onClose}>
            {title && <Title size={23} text={title} margin="0 0 15px 0" display="block"/>}
            <Content>{content}</Content>
            <ButtonsWrapper>
                <Button className={classes.deleteButton} onClick={onDelete}>Удалить</Button>
                <Button onClick={() => onClose()}>Отмена</Button>
            </ButtonsWrapper>
        </Modal>
    );
};

export default DeleteModal;
