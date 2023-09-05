import { gql } from '@apollo/client';

export const QL_DELETE_USER_BY_ADMIN = gql`
    mutation($input: GetRecordByIdInput!) {
        deleteUserByAdmin(input: $input)
    }
`;
