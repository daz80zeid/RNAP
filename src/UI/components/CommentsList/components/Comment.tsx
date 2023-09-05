import React, {useState} from 'react';
import { CommentProps, DeleteCommentVariables } from '../@types';
import { UserSmallCard } from '../../../elements';
import { ComponentContainer } from '../../../containers';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { RedColor } from '../../../../constants/Colors';
import moment from 'moment';
import DeleteModal from '../../DeleteModal';
import { useMutationQL } from '../../../../hooks';
import {Requests} from '../../../../GraphQL';

const useStyles = makeStyles(() => ( {
    actionIcon: {
        opacity: 0.6,
        cursor: 'pointer',
        '&:hover': {
            opacity: 1,
            color: RedColor,
        }
    }
} ));

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`
const Content = styled.div`
        margin-top: 10px;
        font-size: 14px;
`;

const Footer = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: flex-end;
`;

const CommentDate = styled.span`
    font-size: 12px;
`

const Comment: React.FC<CommentProps> = ({comment, onRefetchComments}) => {
    const classes = useStyles();
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    const [deleteComment] = useMutationQL<DeleteCommentVariables>(Requests.QL_DELETE_COMMENT);

    const handleDeleteComment = async () => {
        await deleteComment({id: comment.id});
        setOpenDeleteModal(false)
        await onRefetchComments()
    }

    return (
        <ComponentContainer width="100%">
            <DeleteModal
                open={openDeleteModal}
                onClose={() => setOpenDeleteModal(false)}
                title="Удаление комментария"
                content="Действительно хотите удалить этот комментарий?"
                onDelete={handleDeleteComment}
            />
            <Header>
                <UserSmallCard userId={comment.userId}/>
                <DeleteIcon className={classes.actionIcon} onClick={() => setOpenDeleteModal(true)}/>
            </Header>
            <Content>{comment.description}</Content>
            <Footer>
                <CommentDate>Дата создания: {moment(comment.createdAt).format("D MMMM YYYY HH:mm")}</CommentDate>
            </Footer>
        </ComponentContainer>
    );
};

export default Comment;
