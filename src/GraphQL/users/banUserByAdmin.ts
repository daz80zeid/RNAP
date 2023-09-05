import { gql } from '@apollo/client';

export const QL_BAN_USER_BY_ADMIN = gql`
    mutation($input: BanUserArgsInput!) {
        banUserByAdmin(input: $input){
            id
        }
    }
`;
