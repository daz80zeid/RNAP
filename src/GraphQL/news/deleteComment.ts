import { gql } from '@apollo/client';

export const QL_DELETE_COMMENT = gql`
    mutation($input: GetNewsByIdArgsInput!) {
        deleteCommentByAdmin(input: $input)
    }
`;
