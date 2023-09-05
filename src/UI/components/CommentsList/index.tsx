import React from 'react';
import { CommentListProps, CommentsData } from './@types';
import { useQueryQL } from '../../../hooks';
import { Requests } from '../../../GraphQL';
import styled from 'styled-components';
import { Loader, Title } from '../../elements';
import { LoaderContainer } from '../../containers';
import Comment from './components/Comment'
import { Comment as CommentType} from '../../../types';
import { DefaultAnimation } from '../../../styles/animation';


const Wrapper = styled.div`
	margin-top: 30px;
    
	@media (prefers-reduced-motion: no-preference) {
		animation-name: ${DefaultAnimation};
		animation-fill-mode: backwards;
	}
`;

const NoCommentsText = styled.div`
	width: 100%;
	text-align: center;
	color: #fff;
	font-size: 25px;
`;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

	@media (prefers-reduced-motion: no-preference) {
		animation-name: ${DefaultAnimation};
		animation-fill-mode: backwards;
	}
`

const CommentsList: React.FC<CommentListProps> = ( { newsId } ) => {
    const { data, isReady, refetch } = useQueryQL<CommentsData>(Requests.QL_GET_COMMENTS_BY_NEWS_ID, { id: newsId }, true);
    return (
        <Wrapper>
            {isReady && !!data.length && <Title display="block" text="Комментарии" size={20} padding="0 0 20px 0"/>}
            {
                isReady ?
                    (
                        !!data.length ?
                            <ListWrapper>
                                {data.map(( comment: CommentType ) =>
                                        <Comment comment={comment} key={comment.id} onRefetchComments={refetch}/>
                                )}
                            </ListWrapper>
                            :
                            <NoCommentsText>Нет комментариев</NoCommentsText>
                    )
                    :
                    <LoaderContainer>
                        <Loader/>
                    </LoaderContainer>
            }
        </Wrapper>
    );
};

export default CommentsList;
