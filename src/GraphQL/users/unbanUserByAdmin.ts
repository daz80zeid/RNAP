import { gql } from '@apollo/client';

export const QL_UNBAN_USER_BY_ADMIN = gql`
    mutation($input: GetRecordByIdInput!) {
        unbanUserByAdmin(input: $input){
            id
        }
    }
`;
