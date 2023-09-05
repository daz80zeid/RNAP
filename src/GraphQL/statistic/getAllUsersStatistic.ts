import { gql } from '@apollo/client';

export const QL_STATISTIC_GET_ALL_USERS = gql`
    query {
        getAllUsers {
            id
        }
    }
`;
