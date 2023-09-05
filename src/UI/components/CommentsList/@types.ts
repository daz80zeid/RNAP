import { Comment } from '../../../types';

export type CommentListProps = {
    newsId: string
}

export type CommentsData = {
    getNewsCommentsByNewsId: Comment[]
}

export type CommentProps = {
    comment: Comment
    onRefetchComments: () => void
}

export type DeleteCommentVariables = {
    id: string
}
