import { gql } from '@apollo/client';

export const QL_GET_COMMENTS_BY_NEWS_ID = gql`
    query($input: GetNewsByIdArgsInput!){
        getNewsCommentsByNewsId(input: $input) {
            id
            description
            createdAt
            userId
        }
    }
`;
